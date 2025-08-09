export const metadata = {
  title: "Dmitry Karpov — Product Leader",
  description: "Apple‑style one‑pager. Product leader in TravelTech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
