import { useEffect, useMemo, useState, type FormEvent } from "react";
import { format, parseISO } from "date-fns";
import { Check, ImageIcon, MapPin, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SAITRACK_AWB_HINT,
  SAITRACK_AWB_PREFIX,
  fetchPublicPod,
  fetchPublicTracking,
  formatStatusLabel,
  normalizeSaitrackAwb,
  progressStepCount,
  type PublicTracking,
} from "@/lib/tracking";

const STEPS = [
  { label: "Picked Up", icon: Package },
  { label: "In Transit", icon: Truck },
  { label: "Out for Delivery", icon: MapPin },
  { label: "Delivered", icon: Check },
] as const;

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PublicTracking | null>(null);
  const [podOpen, setPodOpen] = useState(false);
  const [podLoading, setPodLoading] = useState(false);
  const [podError, setPodError] = useState<string | null>(null);
  const [podSrc, setPodSrc] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (podSrc) URL.revokeObjectURL(podSrc);
    };
  }, [podSrc]);

  const doneSteps = progressStepCount(result?.status);
  const connectorWidth = (Math.max(doneSteps - 1, 0) / (STEPS.length - 1)) * 100;

  const latest = result?.events[0] ?? null;
  const LatestIcon = useMemo(() => iconForStatus(result?.status), [result?.status]);

  const handleTracking = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = trackingNumber.trim();
    if (!trimmed) {
      setResult(null);
      setError("Enter a tracking number.");
      return;
    }

    const awbNo = normalizeSaitrackAwb(trimmed);
    if (!awbNo) {
      setResult(null);
      setError(SAITRACK_AWB_HINT);
      return;
    }

    setTrackingNumber(awbNo);
    setIsTracking(true);
    setError(null);
    setResult(null);
    clearPod();

    try {
      const data = await fetchPublicTracking(awbNo);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to fetch tracking right now.");
    } finally {
      setIsTracking(false);
    }
  };

  const resetResult = () => {
    setResult(null);
    setError(null);
    setTrackingNumber("");
    clearPod();
    setPodOpen(false);
  };

  const clearPod = () => {
    setPodSrc((current) => {
      if (current) URL.revokeObjectURL(current);
      return null;
    });
    setPodError(null);
    setPodLoading(false);
  };

  const openPod = async () => {
    if (!result?.awbNo) return;
    setPodOpen(true);
    if (podSrc) return;

    setPodLoading(true);
    setPodError(null);
    try {
      const pod = await fetchPublicPod(result.awbNo);
      const blob = base64ToBlob(pod.imageBase64, pod.mimeType);
      setPodSrc(URL.createObjectURL(blob));
    } catch (err) {
      setPodError(err instanceof Error ? err.message : "POD image not available");
    } finally {
      setPodLoading(false);
    }
  };

  return (
    <section id="tracking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time <span className="text-brand-orange">Tracking</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Track your SaiTrack shipment in real time. Enter the AWB number starting with {SAITRACK_AWB_PREFIX}.
          </p>
        </div>

        {!result ? (
          <div className="max-w-md mx-auto">
            <form onSubmit={handleTracking} className="flex gap-4 mb-3">
              <Input
                type="text"
                placeholder="ST12345678"
                value={trackingNumber}
                onChange={(e) => {
                  setTrackingNumber(e.target.value);
                  if (error) setError(null);
                }}
                className="flex-1 uppercase"
                autoComplete="off"
                spellCheck={false}
              />
              <Button
                type="submit"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white min-w-24"
                disabled={isTracking}
              >
                {isTracking ? "Tracking..." : "Track"}
              </Button>
            </form>
            {error ? (
              <p className="text-sm text-red-600 text-center">{error}</p>
            ) : (
              <p className="text-sm text-brand-gray text-center">{SAITRACK_AWB_HINT}</p>
            )}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-brand-orange px-6 py-4 flex justify-between items-center gap-4">
              <div>
                <p className="text-white/80 text-sm">Tracking ID</p>
                <h3 className="font-bold text-white text-lg">{result.awbNo}</h3>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-sm">
                  {result.deliveryDate ? "Delivered" : "Est. Delivery"}
                </p>
                <p className="text-white font-semibold">
                  {formatDateOnly(result.deliveryDate ?? result.expectedDeliveryDate) ?? "—"}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm font-semibold text-brand-dark">
                  Status: <span className="text-brand-orange">{formatStatusLabel(result.status)}</span>
                </p>
              </div>

              <div className="relative mb-8 pt-2">
                <div className="absolute top-[18px] left-5 right-5 h-1 bg-gray-200 z-0">
                  <div
                    className="absolute top-0 left-0 h-full bg-brand-orange transition-all duration-700"
                    style={{ width: `${connectorWidth}%` }}
                  />
                </div>
                <div className="flex justify-between relative z-10">
                  {STEPS.map((step, i) => {
                    const done = i < doneSteps;
                    return (
                      <div key={step.label} className="flex flex-col items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shadow ${
                            done ? "bg-brand-orange" : "bg-gray-200"
                          }`}
                        >
                          <step.icon className={`h-5 w-5 ${done ? "text-white" : "text-gray-400"}`} />
                        </div>
                        <span
                          className={`text-xs text-center max-w-[60px] ${
                            done ? "text-brand-dark font-medium" : "text-gray-400"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {latest && (
                <div className="bg-orange-50 rounded-xl p-4 mb-6 border border-orange-100">
                  <h4 className="font-semibold text-brand-dark mb-2">Latest Update</h4>
                  <div className="flex gap-3 items-start">
                    <div className="bg-brand-orange/10 p-2 rounded-lg">
                      <LatestIcon className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-dark">{formatStatusLabel(latest.status)}</p>
                      <p className="text-sm text-brand-gray">{formatEventAt(latest.eventAt)}</p>
                      {(latest.location || latest.remark) && (
                        <p className="text-sm text-brand-gray mt-1">
                          {[latest.remark, latest.location].filter(Boolean).join(" — ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="border border-gray-100 rounded-xl overflow-hidden mb-5">
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <h4 className="font-semibold text-brand-dark">Delivery Details</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="p-4">
                    <p className="text-xs text-brand-gray uppercase tracking-wide mb-1">Ship From</p>
                    <p className="font-semibold text-brand-dark">{result.shipperName || "—"}</p>
                    <p className="text-sm text-brand-gray">{result.origin || "—"}</p>
                    {result.bookingDate && (
                      <p className="text-sm text-brand-gray mt-1">Booked {formatDateOnly(result.bookingDate)}</p>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-brand-gray uppercase tracking-wide mb-1">Ship To</p>
                    <p className="font-semibold text-brand-dark">{result.consignee || "—"}</p>
                    <p className="text-sm text-brand-gray">{result.destination || "—"}</p>
                  </div>
                </div>
              </div>

              {result.events.length > 0 && (
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-5">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <h4 className="font-semibold text-brand-dark">Tracking History</h4>
                  </div>
                  <ol className="divide-y divide-gray-100">
                    {result.events.map((event, index) => (
                      <li key={`${event.eventAt}-${event.status}-${index}`} className="px-4 py-3">
                        <p className="font-medium text-brand-dark">{formatStatusLabel(event.status)}</p>
                        <p className="text-sm text-brand-gray">{formatEventAt(event.eventAt)}</p>
                        {(event.location || event.remark) && (
                          <p className="text-sm text-brand-gray mt-0.5">
                            {[event.remark, event.location].filter(Boolean).join(" — ")}
                          </p>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                {result.hasPod && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={openPod}
                    className="flex-1 border-brand-orange text-brand-orange hover:bg-orange-50"
                  >
                    <ImageIcon className="h-4 w-4" />
                    View POD
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={resetResult}
                  className="flex-1 border-brand-orange text-brand-orange hover:bg-orange-50"
                >
                  Track Another Shipment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog
        open={podOpen}
        onOpenChange={(open) => {
          setPodOpen(open);
          if (!open) setPodError(null);
        }}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Proof of Delivery</DialogTitle>
          </DialogHeader>
          {podLoading && <p className="text-sm text-brand-gray">Loading POD…</p>}
          {podError && <p className="text-sm text-red-600">{podError}</p>}
          {podSrc && (
            <img src={podSrc} alt="Proof of delivery" className="w-full rounded-md border border-gray-100" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

function iconForStatus(status: string | null | undefined) {
  switch (status) {
    case "DELIVERED":
    case "PARTIAL_DELIVERED":
    case "RETURNED":
      return Check;
    case "OUT_FOR_DELIVERY":
    case "RETURN_OUT_FOR_DELIVERY":
    case "DELIVERY_ATTEMPTED":
      return MapPin;
    case "IN_TRANSIT":
    case "PAPER_WORK_INSCAN":
    case "RETURN_IN_TRANSIT":
      return Truck;
    default:
      return Package;
  }
}

function formatDateOnly(value: string | null | undefined): string | null {
  if (!value) return null;
  const [year, month, day] = value.slice(0, 10).split("-").map(Number);
  if (!year || !month || !day) return value;
  return format(new Date(year, month - 1, day), "d MMMM yyyy");
}

function formatEventAt(value: string): string {
  const parsed = parseISO(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return format(parsed, "d MMMM yyyy — h:mm a");
}

function base64ToBlob(base64: string, mimeType: string): Blob {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: mimeType });
}

export default TrackingSection;
