import PageHero from "@/components/sections/pageHero";
import CTA from "@/components/sections/CTA";
import { Star } from "lucide-react";

export const metadata = {
  title: "Client Testimonials | BizzBuzz Creations",
  description:
    "Real feedback from BizzBuzz Creations clients — Google reviews from businesses we've worked with on SEO, digital marketing, and web development.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/testimonials",
  },
};

// Same real reviews used in the homepage's Reviews marquee — shown here
// as a full grid instead, since this page's job is to let people actually
// read them rather than watch them scroll past.
const TESTIMONIALS = [
  {
    name: "Sunayana Srivastava",
    role: "Verified Google Review",
    text: "Great Digital Marketing agency! Professional, creative & result oriented. Our campaigns have performed better than ever since partnering with BizzBuzz creations. Highly recommend their services.",
  },
  {
    name: "Raunak Tripathi",
    role: "Verified Google Review",
    text: "Great experience with Bizzbuzz Creations. Professional, responsive, and delivered quality work on time. Highly recommended for growing your business.",
  },
  {
    name: "Subhash Srivastava",
    role: "Verified Google Review",
    text: "Highly professional and competent team. Very cooperative and prompt their services. The city needs such a service providers. I would recommend this organisation highly to everyone.",
  },
  {
    name: "Sarthak Mishra",
    role: "Verified Google Review",
    text: "Awesome experience with bizz buzz creations. Great for people and companies looking out for digital marketing agency.",
  },
  {
    name: "Tariq Khan",
    role: "Verified Google Review",
    text: "Best digital marketing agency in prayagraj. They are very professional and cooperative. I am very happy with their services. I would recommend this organisation highly to everyone.",
  },
  {
    name: "Rudra Pratap Singh",
    role: "Verified Google Review",
    text: "One of the best digital marketing service providers in Prayagraj. The team is highly trustworthy and delivers outstanding SEO results. Great experience overall!",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Testimonials"
        title="What Our Clients Say"
        subtitle="Real, verified reviews from businesses we've worked with — no cherry-picked quotes, just what clients told Google directly."
      />

      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-0.5 text-yellow-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Want to share your own experience?{" "}
          <a
            href="/contact"
            className="font-semibold text-[#0B60B0] hover:underline"
          >
            Get in touch
          </a>{" "}
          — we&rsquo;d love to hear from you.
        </p>
      </section>

      <div className="bg-gray-50 pb-20">
        <CTA />
      </div>
    </>
  );
}
