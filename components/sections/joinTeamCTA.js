import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

export default function JoinTeamCTA() {
  return (
    <section
      className="overflow-hidden"
      style={{
        // Brand blue, strongest on the right, fading through to white on
        // the left where the text sits.
        backgroundImage:
          "radial-gradient(rgba(11,96,176,0.14) 1px, transparent 1px), linear-gradient(90deg, #ffffff 0%, #eaf4fb 38%, #7ec2e8 72%, #0B60B0 100%)",
        backgroundSize: "22px 22px, 100% 100%",
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-10 px-6 md:px-12 py-14">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            Join Our Team!
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="mailto:info@bizzbuzzcreations.com"
              className="inline-flex items-center gap-1.5 border-2 border-[#0B60B0] text-[#0B60B0] hover:bg-[#0B60B0] hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition"
            >
              <Mail size={16} />
              Drop An Email
            </Link>
            <Link
              href="/career"
              className="inline-flex items-center gap-1.5 bg-[#0B60B0] hover:bg-[#0B60B0]/90 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
            >
              See All Careers
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="relative h-56 sm:h-72 lg:h-80 flex items-center justify-center">
          {/* Decorative brand-blue backdrop shape behind the team photo */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 bg-[#0B60B0] rotate-45 rounded-2xl" />
          <div className="relative w-full h-full max-w-md rounded-2xl overflow-hidden">
            <Image
              src="/teamPic.webp"
              alt="The BizzBuzz Creations team"
              fill
              sizes="(max-width: 1024px) 90vw, 448px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
