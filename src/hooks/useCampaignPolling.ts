"use client";

import { useEffect } from "react";
import { useCampaignStore } from "../store/useCampaignStore";

export function useCampaignPolling() {
  const setCampaigns = useCampaignStore((s) => s.setCampaigns);
  const setLoading = useCampaignStore((s) => s.setLoading);
  const setError = useCampaignStore((s) => s.setError);

  useEffect(() => {
    const controller = new AbortController();
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const MAX_RETRIES = 3;
    // const BASE_POLL_INTERVAL = 15000;

    const fetchWithRetry = async (attempt = 0) => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/campaigns", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setCampaigns(data);
        setLoading(false);

        // timeoutId = setTimeout(() => {
        //   controller = new AbortController();
        //   fetchWithRetry(0);
        // }, BASE_POLL_INTERVAL);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err: unknown) {
        if (controller.signal.aborted) return;
        if (attempt < MAX_RETRIES) {
          const delay = 2 ** attempt * 500;
          timeoutId = setTimeout(() => {
            fetchWithRetry(attempt + 1);
          }, delay);
        } else {
          setLoading(false);
          setError("Failed to refresh campaigns. Please try again.");
        }
      }
    };

    fetchWithRetry();

    return () => {
      controller.abort();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [setCampaigns, setLoading, setError]);
}
