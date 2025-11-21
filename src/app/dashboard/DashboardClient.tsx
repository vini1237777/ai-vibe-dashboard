"use client";

import { useCampaignPolling } from "../../hooks/useCampaignPolling";

export default function DashboardClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useCampaignPolling();
  return <>{children}</>;
}
