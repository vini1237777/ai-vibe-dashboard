"use client";

import { useState } from "react";
import campaignsData from "../data/campaigns.json";
import type { Campaign } from "../types/campaign";
import { parsePrompt, type PromptActionType } from "../utils/promptParser";

const campaigns = campaignsData as Campaign[];

function applyAction(action: PromptActionType): Campaign[] {
  const result = [...campaigns];

  switch (action) {
    case "PAUSED_ONLY":
      return result.filter((c) => c.status === "Paused");
    case "ACTIVE_ONLY":
      return result.filter((c) => c.status === "Active");
    case "TOP_BY_CTR":
      return result.slice().sort((a, b) => b.ctr - a.ctr);
    case "BEST_BY_CONVERSIONS":
      return result.slice().sort((a, b) => b.conversions - a.conversions);
    default:
      return result;
  }
}

export default function PromptPlayground() {
  const [prompt, setPrompt] = useState("");
  const [lastAction, setLastAction] = useState<PromptActionType | null>(null);

  const actionLabelMap: Record<PromptActionType, string> = {
    TOP_BY_CTR: "Showing campaigns sorted by CTR (desc)",
    PAUSED_ONLY: "Showing only paused campaigns",
    ACTIVE_ONLY: "Showing only active campaigns",
    BEST_BY_CONVERSIONS: "Showing best campaigns by conversions",
    UNKNOWN: "Could not understand prompt — showing all campaigns",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { type } = parsePrompt(prompt);
    setLastAction(type);
  };

  const visibleCampaigns = applyAction(lastAction ?? "UNKNOWN");

  return (
    <section className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-sm border space-y-3"
      >
        <label className="block text-sm font-medium mb-1">
          Prompt Playground
        </label>

        <p className="text-xs text-gray-500 mb-2">
          Try prompts like:{" "}
          <span className="font-mono">
            `Show top campaigns by CTR&quot;, &quot;List paused campaigns&quot;,
            &quot;Highlight best performing campaign`
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            className="flex-1 border bg-white px-3 py-2 rounded text-sm"
            placeholder='e.g. "Show top campaigns by CTR"'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Run prompt
          </button>
        </div>

        {lastAction && (
          <p className="text-xs text-gray-600 mt-2">
            {actionLabelMap[lastAction]}
          </p>
        )}
      </form>

      <section className="bg-white p-4 rounded-lg shadow-sm border">
        <h2 className="font-semibold text-lg mb-3">Resulting campaigns</h2>

        {visibleCampaigns.length === 0 ? (
          <p className="text-sm text-gray-500">
            No campaigns match this prompt.
          </p>
        ) : (
          <ul className="space-y-2 text-sm">
            {visibleCampaigns.map((c) => (
              <li
                key={c.id}
                className="flex items-center justify-between border rounded px-3 py-2"
              >
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500">
                    CTR {c.ctr}% · {c.conversions} conversions · {c.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}
