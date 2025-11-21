"use client";

import { create } from "zustand";
import type { Campaign, CampaignStatus } from "../types/campaign";
import campaignsData from "../data/campaigns.json";

type SortOption = "none" | "ctr" | "conversions";
type StatusFilter = "all" | CampaignStatus;

type CampaignStore = {
  campaigns: Campaign[];
  statusFilter: StatusFilter;
  sortBy: SortOption;
  search: string;
  setStatusFilter: (status: StatusFilter) => void;
  setSortBy: (sort: SortOption) => void;
  setSearch: (value: string) => void;
  getFilteredCampaigns: () => Campaign[];
};

const initialCampaigns = campaignsData as Campaign[];

export const useCampaignStore = create<CampaignStore>((set, get) => ({
  campaigns: initialCampaigns,
  statusFilter: "all",
  sortBy: "none",
  search: "",

  setStatusFilter: (status) => set({ statusFilter: status }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setSearch: (value) => set({ search: value }),

  getFilteredCampaigns: () => {
    const { campaigns, statusFilter, sortBy, search } = get();

    let result = [...campaigns];

    if (statusFilter !== "all") {
      result = result.filter((c) => c.status === statusFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((c) => c.name.toLowerCase().includes(q));
    }

    if (sortBy === "ctr") {
      result.sort((a, b) => b.ctr - a.ctr);
    } else if (sortBy === "conversions") {
      result.sort((a, b) => b.conversions - a.conversions);
    }

    return result;
  },
}));
