import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA-2";
import FAQ from "@/components/sections/FAQ";
import HomeAbout from "@/components/sections/homeAbout";
import HomeHero from "@/components/sections/homeHero";
import OurServices from "@/components/sections/ourServices";
import Reviews from "@/components/sections/reviews";
import WhatMAkesUs from "@/components/sections/whatMakesUs";
import RecentWork from "@/components/sections/recentWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ConsultationPopup from "@/components/sections/popupForm";
import LogoSlider from "@/components/sections/logoSlider";
import LatestBlogs from "@/components/sections/latestBlogs";

export const metadata = {
  title:
    "Best Digital Marketing Agency in Prayagraj | SEO & SMM Services Company in Prayagraj | BizzBuzz Creations",
  description:
    "Searching for the best digital marketing agency in Prayagraj? We offer expert SEO, SMM, rank higher, increase visibility and result-driven strategies to grow your business and generate quality leads.",
  keywords:
    "best digital marketing agency in allahabad, best digital marketing agency in prayagraj, best digital marketing company in prayagraj, professional digital marketing, Best SEO Service in prayagraj, Expert SEO service, SMM services in prayagraj, Best SMM agency in prayagraj, local SEO services in prayagraj, Best Paid Ads services in prayagraj, Professional SEO Services in Prayagraj",
  canonical: "https://bizzbuzzcreations.com/",
  openGraph: {
    title:
      "Best Digital Marketing Agency in Prayagraj | Best SEO Service Company in Prayagraj | Best SMM Service In Prayagraj",
    description:
      "Searching for the best digital marketing agency in Prayagraj? We offer expert SEO, SMM, rank higher, increase visibility and result-driven strategies to grow your business and generate quality leads.",
    url: "https://bizzbuzzcreations.com/",
    type: "website",
    siteName: "BizzBuzz Creations",
    locale: "en_US",
    images: ["https://bizzbuzzcreations.com/Industry Authority (1).png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Digital Marketing Agency in Prayagraj| SEO and SMM Service Company | BizzBuzz Creations",
    description:
      "Searching for the best SEO and SMM service company in Prayagraj? We help businesses rank higher, increase visibility, and get more leads with proven digital marketing strategies.",
    images: ["https://bizzbuzzcreations.com/Industry Authority (1).png"],
  },
};

export default function Home() {
  return (
    <>
      {/* Home Hero Section */}
      <HomeHero />

      {/* About section */}
      <HomeAbout />

      {/* Our Services */}
      <OurServices />

      {/* CTA-2 Section */}
      <CTA2 />

      {/* What Makes Us Different section */}
      <WhatMAkesUs />

      {/* Why choose us */}
      <WhyChooseUs />

      {/* Why Choose Us Section */}
      <RecentWork />

      {/* <ClientLogo /> */}
      <LogoSlider />

      <div className="pt-10">
        {/* Reviews section */}
        <Reviews />
      </div>

      {/* Growth counter  */}
      <Counter />

      <LatestBlogs />

      <div className="py-10">
        {/* FAQ section */}
        <FAQ />

        {/* CTA section */}
        <CTA />
      </div>
      {/* Popup form */}
      <ConsultationPopup />
    </>
  );
}
