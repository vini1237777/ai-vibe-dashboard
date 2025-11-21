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
  isLoading: boolean;
  error: string | null;

  setCampaigns: (campaigns: Campaign[]) => void;
  setStatusFilter: (status: StatusFilter) => void;
  setSortBy: (sort: SortOption) => void;
  setSearch: (value: string) => void;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
};

const campaigns = campaignsData as Campaign[];

export const useCampaignStore = create<CampaignStore>((set, get) => ({
  campaigns,
  statusFilter: "all",
  sortBy: "none",
  search: "",
  isLoading: false,
  error: null,

  setCampaigns: (campaigns) => set({ campaigns }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setSearch: (value) => set({ search: value }),
  setLoading: (value) => set({ isLoading: value }),
  setError: (value) => set({ error: value }),
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
