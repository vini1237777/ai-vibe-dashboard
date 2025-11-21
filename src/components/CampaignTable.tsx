"use client";

import { useMemo } from "react";
import { useCampaignStore } from "../store/useCampaignStore";
import type { Campaign } from "../types/campaign";

export default function CampaignTable() {
  const campaigns = useCampaignStore((s) => s.campaigns);
  const statusFilter = useCampaignStore((s) => s.statusFilter);
  const sortBy = useCampaignStore((s) => s.sortBy);
  const search = useCampaignStore((s) => s.search);

  const filteredCampaigns = useMemo((): Campaign[] => {
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
    }

    if (sortBy === "conversions") {
      result.sort((a, b) => b.conversions - a.conversions);
    }

    return result;
  }, [campaigns, statusFilter, sortBy, search]);

  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Campaigns</h2>
        <span className="text-xs text-gray-500">
          {filteredCampaigns.length} campaigns
        </span>
      </header>

      {filteredCampaigns.length === 0 ? (
        <p className="text-sm text-gray-500">
          No campaigns match the selected filters.
        </p>
      ) : (
        <>
          <div className="space-y-3 md:hidden">
            {filteredCampaigns.map((c) => (
              <article
                key={c.id}
                className="rounded border bg-white p-3 text-sm flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{c.name}</h3>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      c.status === "Active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                  <p className="text-xs text-gray-500">
                    Impressions{" "}
                    <span className="block text-gray-900">
                      {c.impressions.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Clicks{" "}
                    <span className="block text-gray-900">
                      {c.clicks.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    CTR{" "}
                    <span className="block text-gray-900">
                      {c.ctr.toFixed(1)}%
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Conversions{" "}
                    <span className="block text-gray-900">
                      {c.conversions.toLocaleString()}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-3 py-2 border-b">Name</th>
                  <th className="px-3 py-2 border-b text-right">Impressions</th>
                  <th className="px-3 py-2 border-b text-right">Clicks</th>
                  <th className="px-3 py-2 border-b text-right">CTR</th>
                  <th className="px-3 py-2 border-b text-right">Conversions</th>
                  <th className="px-3 py-2 border-b text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredCampaigns.map((c) => (
                  <tr key={c.id} className="border-b last:border-b-0">
                    <td className="px-3 py-2">{c.name}</td>
                    <td className="px-3 py-2 text-right">
                      {c.impressions.toLocaleString()}
                    </td>
                    <td className="px-3 py-2 text-right">
                      {c.clicks.toLocaleString()}
                    </td>
                    <td className="px-3 py-2 text-right">
                      {c.ctr.toFixed(1)}%
                    </td>
                    <td className="px-3 py-2 text-right">
                      {c.conversions.toLocaleString()}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          c.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
