export const SAITRACK_AWB_PREFIX = "ST";

export const SAITRACK_AWB_HINT =
  "SaiTrack AWBs start with ST. Numbers without that prefix are not searched.";

const TRACKING_PATH = "/api/public/tracking";
const MAX_AWB_LENGTH = 64;

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
  if (!awb.startsWith(SAITRACK_AWB_PREFIX)) return null;
  if (awb.length <= SAITRACK_AWB_PREFIX.length) return null;
  if (awb.length > MAX_AWB_LENGTH) return null;
  return awb;
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
  return getJson<PublicTracking>(`${TRACKING_PATH}/${encodeURIComponent(awbNo)}`);
}

export async function fetchPublicPod(awbNo: string): Promise<PublicPod> {
  return getJson<PublicPod>(`${TRACKING_PATH}/${encodeURIComponent(awbNo)}/pod`);
}

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const body = (await response.json().catch(() => null)) as
    | ApiErrorBody
    | ApiSuccessBody<T>
    | null;

  if (!response.ok) {
    throw new Error(messageFromBody(body, response.status));
  }

  if (!body || !("success" in body) || !body.success || !("data" in body) || !body.data) {
    throw new Error("Unable to fetch tracking right now.");
  }

  return body.data;
}

function messageFromBody(body: ApiErrorBody | ApiSuccessBody<unknown> | null, status: number): string {
  if (status === 404) {
    const notFound = typeof body?.message === "string" ? body.message.trim() : "";
    return notFound || "No shipment found for this AWB.";
  }
  if (status === 401 || status === 403 || status >= 500) {
    return "Unable to fetch tracking right now.";
  }
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  return message || "Unable to fetch tracking right now.";
}
