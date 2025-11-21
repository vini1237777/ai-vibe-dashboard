import { NextResponse } from "next/server";
import campaigns from "../../../data/campaigns.json";

export async function GET() {
  return NextResponse.json(campaigns);
}
