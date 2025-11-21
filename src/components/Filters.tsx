"use client";

import { useCampaignStore } from "../store/useCampaignStore";

export default function Filters() {
  const statusFilter = useCampaignStore((s) => s.statusFilter);
  const sortBy = useCampaignStore((s) => s.sortBy);
  const search = useCampaignStore((s) => s.search);
  const setStatusFilter = useCampaignStore((s) => s.setStatusFilter);
  const setSortBy = useCampaignStore((s) => s.setSortBy);
  const setSearch = useCampaignStore((s) => s.setSearch);

  return (
    <section className="flex flex-wrap gap-3 items-center justify-between">
      <div className="flex flex-wrap gap-3">
        <select
          className="border bg-white px-3 py-2 rounded text-sm"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as typeof statusFilter)
          }
        >
          <option value="all">All statuses</option>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>

        <select
          className="border bg-white px-3 py-2 rounded text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
        >
          <option value="none">Sort: None</option>
          <option value="ctr">Sort by CTR</option>
          <option value="conversions">Sort by Conversions</option>
        </select>
      </div>

      <input
        className="border bg-white px-3 py-2 rounded text-sm min-w-[220px]"
        placeholder="Search campaigns..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
}
