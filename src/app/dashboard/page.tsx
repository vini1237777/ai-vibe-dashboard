import Filters from "../../components/Filters";
import CampaignTable from "../../components/CampaignTable";
import TrendChart from "../../components/TrendChart";
import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Marketing Dashboard | AI Vibe",
  description:
    "Track campaign performance, CTR and conversions with an AI-powered dashboard",
};

export default function DashboardPage() {
  return (
    <DashboardClient>
      <main className="p-6 max-w-7xl mx-auto space-y-6 bg-purple-50">
        <header>
          <h1 className="text-3xl font-bold">
            Marketing Intelligence Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Monitor and analyze the performance of your ad campaigns.
          </p>
        </header>

        <Filters />

        <section className="grid gap-6 lg:grid-cols-[2fr,1.3fr]">
          <div className="min-h-[450px]">
            <CampaignTable />
          </div>
          <div className="min-h-[300px]">
            <TrendChart />
          </div>
        </section>
      </main>
    </DashboardClient>
  );
}
