"use client";

import { useCampaignStore } from "../store/useCampaignStore";

export default function CampaignTable() {
  const campaigns = useCampaignStore((s) => s.getFilteredCampaigns());

  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Campaigns</h2>
        <span className="text-xs text-gray-500">
          {campaigns.length} campaigns
        </span>
      </header>

      {campaigns.length === 0 ? (
        <p className="text-sm text-gray-500">
          No campaigns match the selected filters.
        </p>
      ) : (
        <div className="overflow-x-auto">
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
              {campaigns.map((c) => (
                <tr key={c.id} className="border-b last:border-b-0">
                  <td className="px-3 py-2">{c.name}</td>
                  <td className="px-3 py-2 text-right">
                    {c.impressions.toLocaleString()}
                  </td>
                  <td className="px-3 py-2 text-right">
                    {c.clicks.toLocaleString()}
                  </td>
                  <td className="px-3 py-2 text-right">{c.ctr.toFixed(1)}%</td>
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
      )}
    </section>
  );
}
