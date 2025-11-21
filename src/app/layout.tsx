import type { Metadata } from "next";
import "./globals.css";
import AppNav from "../components/AppNav";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Vibe Dashboard",
  description: "Marketing intelligence dashboard and prompt playground",
  openGraph: {
    title: "AI Vibe Dashboard",
    description:
      "Analyze marketing campaigns and simulate AI prompts in one place.",
    url: "https://<your-vercel-url>",
    siteName: "AI Vibe Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vibe Dashboard",
    description:
      "Analyze marketing campaigns and simulate AI prompts in one place.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <script type="application/ld+json">
          {`
        {
         "@context": "https://schema.org",
         "@type": "SoftwareApplication",
         "name": "AI Vibe Growth",
         "applicationCategory": "BusinessApplication"
  }
   `}
        </script>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-slate-900 text-white px-3 py-2 rounded"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <AppNav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
