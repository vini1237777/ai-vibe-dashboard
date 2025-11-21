"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useCampaignStore } from "../store/useCampaignStore";
import type { Campaign } from "../types/campaign";

export default function TrendChart() {
  const campaigns = useCampaignStore((s) => s.campaigns);

  const chartData = useMemo(
    () =>
      [...campaigns].map((c: Campaign) => ({
        name: c.name,
        ctr: c.ctr,
        conversions: c.conversions,
      })),
    [campaigns]
  );

  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border h-full flex flex-col">
      <h2 className="font-semibold text-lg mb-4">Performance trend</h2>

      {chartData.length === 0 ? (
        <p className="text-sm text-gray-500">
          Not enough data to display a chart.
        </p>
      ) : (
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => `${v}%`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 11 }}
              />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="ctr"
                stroke="#2563eb"
                dot={{ r: 3 }}
                name="CTR (%)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="conversions"
                stroke="#16a34a"
                dot={{ r: 3 }}
                name="Conversions"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}
