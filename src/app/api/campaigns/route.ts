import { NextResponse } from "next/server";
import campaigns from "../../../data/campaigns.json";

export async function GET() {
  await new Promise((r) => setTimeout(r, 300));
  return NextResponse.json(campaigns);
}
