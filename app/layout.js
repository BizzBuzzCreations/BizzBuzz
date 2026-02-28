import { Fira_Sans, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { ToastContainer, Bounce } from "react-toastify";
import FlowbiteInit from "@/components/sections/FlowbiteInit";
import Whatsapp from "@/components/sections/whatsapp";
import AllScripts from "@/components/sections/allScripts";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fira",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm",
  display: "swap",
});

export const metadata = {
  title: "Best Digital Marketing Agency in India | Bizz Buzz Creations",
  description:
    "Grow your business with Bizz Buzz Creations – India’s top digital marketing and BPO company. We offer SEO, SMM, and lead generation services.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <AllScripts />
      </head>
      <body
        className={`${firaSans.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <Whatsapp />
        <Navbar />
        <FlowbiteInit />
        <main>{children}</main>
        <Footer />
        <Script src="/js/flowbite.min.js" strategy="afterInteractive" />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
