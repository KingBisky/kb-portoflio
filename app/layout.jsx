import "./globals.css";

export const metadata = {
  title: "Kang Bin Wong | Data, AI & Analytics Portfolio",
  description: "Portfolio of Kang Bin Wong — applied AI, data analytics, machine learning and data visualisation projects.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
