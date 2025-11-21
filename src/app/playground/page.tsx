import PromptPlayground from "@/src/components/PromptPlayground";

export default function PlaygroundPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Prompt Playground</h1>
        <p className="text-gray-500 mt-1">
          Simulate AI-driven commands to filter and highlight your campaigns.
        </p>
      </header>

      <PromptPlayground />
    </main>
  );
}
