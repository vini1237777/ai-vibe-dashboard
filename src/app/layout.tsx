import type { Metadata } from "next";
import "./globals.css";
import AppNav from "../components/AppNav";

export const metadata: Metadata = {
  title: "AI Vibe Dashboard",
  description: "Marketing intelligence dashboard and prompt playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <div className="min-h-screen flex flex-col">
          <AppNav />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
