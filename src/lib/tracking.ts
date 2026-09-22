export const SAITRACK_AWB_PREFIX = "ST";

const TRACKING_PATH = "/api/public/tracking";
const MAX_AWB_LENGTH = 64;

function trackingApiBase(): string {
  return (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");
}

function trackingHeaders(): HeadersInit {
  const key = (import.meta.env.VITE_WEBSITE_TRACKING_KEY ?? "").trim();
  return key ? { "x-website-tracking-key": key } : {};
}

const STATUS_LABELS: Record<string, string> = {
  BOOKED: "Booked",
  MANIFESTED: "Manifested",
  OUT_FOR_PICKUP: "Out for pickup",
  PICKED_UP: "Picked up",
  PICKUP_FAILED: "Pickup failed",
  IN_TRANSIT: "In transit",
  PAPER_WORK_INSCAN: "Paper work inscan",
  OUT_FOR_DELIVERY: "Out for delivery",
  DELIVERY_ATTEMPTED: "Delivery attempted",
  PARTIAL_DELIVERED: "Partial delivered",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
  LOST: "Lost",
  RETURN_IN_TRANSIT: "Return in transit",
  RETURN_OUT_FOR_DELIVERY: "Return out for delivery",
  RETURNED: "Returned",
};

export type PublicTrackingEvent = {
  location: string | null;
  status: string;
  remark: string | null;
  externalStatus: string | null;
  eventAt: string;
};

export type PublicTracking = {
  awbNo: string;
  consignee: string | null;
  shipperName: string | null;
  bookingDate: string | null;
  origin: string | null;
  destination: string | null;
  status: string;
  expectedDeliveryDate: string | null;
  deliveryDate: string | null;
  remark: string | null;
  hasPod: boolean;
  events: PublicTrackingEvent[];
};

export type PublicPod = {
  mimeType: string;
  imageBase64: string;
};

type ApiErrorBody = {
  success?: boolean;
  message?: string;
  data?: unknown;
};

type ApiSuccessBody<T> = {
  success: boolean;
  data: T;
};

export function normalizeSaitrackAwb(raw: string): string | null {
  const awb = raw.trim().replace(/\s+/g, "").toUpperCase();
  if (!awb || awb.length > MAX_AWB_LENGTH) return null;
  if (awb.startsWith(SAITRACK_AWB_PREFIX)) {
    if (awb.length <= SAITRACK_AWB_PREFIX.length) return null;
    return awb;
  }
  if (/^\d+$/.test(awb)) {
    const withPrefix = `${SAITRACK_AWB_PREFIX}${awb}`;
    return withPrefix.length <= MAX_AWB_LENGTH ? withPrefix : null;
  }
  return null;
}

export function formatStatusLabel(status: string | null | undefined): string {
  if (!status) return "—";
  return STATUS_LABELS[status] ?? status.replace(/_/g, " ");
}

export function progressStepCount(status: string | null | undefined): number {
  switch (status) {
    case "DELIVERED":
      return 4;
    case "OUT_FOR_DELIVERY":
    case "DELIVERY_ATTEMPTED":
    case "PARTIAL_DELIVERED":
      return 3;
    case "IN_TRANSIT":
    case "PAPER_WORK_INSCAN":
    case "RETURN_IN_TRANSIT":
    case "RETURN_OUT_FOR_DELIVERY":
    case "RETURNED":
    case "LOST":
      return 2;
    case "PICKED_UP":
      return 1;
    default:
      return 0;
  }
}

export async function fetchPublicTracking(awbNo: string): Promise<PublicTracking> {
  return getJson<PublicTracking>(
    `${trackingApiBase()}${TRACKING_PATH}/${encodeURIComponent(awbNo)}`,
  );
}

export async function fetchPublicPod(awbNo: string): Promise<PublicPod> {
  return getJson<PublicPod>(
    `${trackingApiBase()}${TRACKING_PATH}/${encodeURIComponent(awbNo)}/pod`,
  );
}

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: trackingHeaders() });
  const body = (await response.json().catch(() => null)) as
    | ApiErrorBody
    | ApiSuccessBody<T>
    | null;

  if (!response.ok) {
    throw new Error(messageFromBody(body, response.status));
  }

  if (!body || !("success" in body) || !body.success || !("data" in body) || body.data == null) {
    throw new Error("Unable to fetch tracking right now.");
  }

  return body.data as T;
}

function messageFromBody(
  body: ApiErrorBody | ApiSuccessBody<unknown> | null,
  status: number,
): string {
  const message =
    body && "message" in body && typeof body.message === "string"
      ? body.message.trim()
      : "";
  if (status === 404) {
    return message || "No shipment found for this AWB.";
  }
  if (status === 401 || status === 403 || status >= 500) {
    return "Unable to fetch tracking right now.";
  }
  return message || "Unable to fetch tracking right now.";
}
