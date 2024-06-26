import "./globals.css";
import "@/node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SOLNINO - $SRICH",
  description: "Powered by $SRICH Labs",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
