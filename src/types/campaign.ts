export type CampaignStatus = "Active" | "Paused";

export type Campaign = {
  id: string;
  name: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  status: CampaignStatus;
  date: string;
};
