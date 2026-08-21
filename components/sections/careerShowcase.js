import Image from "next/image";

// "Why Work With Us" + "Join The Team" — real BizzBuzz office/team photos
// throughout (same assets already used in the homepage's shuffle grid and
// the About page), not stock photography or another company's people.
// Split into two exports so the page can place them on either side of
// the Open Positions section.
export function CareerWhyUs() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Why Work with BizzBuzz Creations?
          </h2>
          <p className="text-white/60 leading-relaxed mb-5">
            BizzBuzz Creations runs on flat hierarchies, clear
            communication, and real ownership — you&rsquo;re not waiting on
            five layers of sign-off to actually do your job. Good ideas win
            regardless of title.
          </p>
          <p className="text-white/60 leading-relaxed">
            We&rsquo;re a growing agency working out of Prayagraj, India
            and London, UK, and we&rsquo;re always looking for people who
            want to level up their own skills, not just tick boxes on
            someone else&rsquo;s roadmap.
          </p>
        </div>

        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/image-2.jpg"
            alt="Inside the BizzBuzz Creations office"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function CareerJoinTeam() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Join the BizzBuzz Creations Team!
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Work on real client campaigns from day one, learn from a
            hands-on team, and take on as much responsibility as
            you&rsquo;re ready for.
          </p>
          <a
            href="#open-positions"
            className="inline-flex items-center bg-[#0B60B0] hover:bg-[#0B60B0]/90 text-white text-sm font-semibold px-6 py-3 rounded-full transition w-fit"
          >
            Apply Now
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
            <Image
              src="/image-5.webp"
              alt="The BizzBuzz Creations team celebrating together"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
            <Image
              src="/image-4.webp"
              alt="The BizzBuzz Creations team at an office event"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
            <Image
              src="/teamPic.webp"
              alt="The BizzBuzz Creations team"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
