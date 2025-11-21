export type PromptActionType =
  | "TOP_BY_CTR"
  | "PAUSED_ONLY"
  | "ACTIVE_ONLY"
  | "BEST_BY_CONVERSIONS"
  | "UNKNOWN";

export type PromptAction = {
  type: PromptActionType;
};

export function parsePrompt(input: string): PromptAction {
  const prompt = input.toLowerCase().trim();

  if (!prompt) return { type: "UNKNOWN" };

  if (prompt.includes("paused")) return { type: "PAUSED_ONLY" };
  if (prompt.includes("active")) return { type: "ACTIVE_ONLY" };
  if (prompt.includes("ctr") || prompt.includes("top campaigns"))
    return { type: "TOP_BY_CTR" };
  if (prompt.includes("best") || prompt.includes("conversions"))
    return { type: "BEST_BY_CONVERSIONS" };

  return { type: "UNKNOWN" };
}
