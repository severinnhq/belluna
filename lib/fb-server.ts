// lib/fb-server.ts

export interface CapiEvent {
  event_name: string;
  event_time: number;
  event_id?: string;
  user_data: Record<string, string>;
  custom_data?: Record<string, unknown>;
}

export async function sendCapiEvent(event: CapiEvent): Promise<unknown> {
  const res = await fetch('/api/fb-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: [event] }),
  });

  return res.json();
}
