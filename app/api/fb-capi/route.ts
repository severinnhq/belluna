

import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID!;
const ACCESS_TOKEN = process.env.FACEBOOK_CAPI_TOKEN!;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const fbRes = await fetch(
    `https://graph.facebook.com/v15.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );
  const json = await fbRes.json();
  return NextResponse.json(json, { status: fbRes.status });
}
