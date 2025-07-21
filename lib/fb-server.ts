
export type CapiEvent = {
  event_name: string;
  event_time: number;
  user_data: Record<string, string>;
  custom_data?: Record<string, any>;
  event_id?: string;
};

export async function sendCapiEvent(e: CapiEvent) {
  const res = await fetch('/api/fb-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: [ e ] }),
  });
  return res.json();
}
