import Globe from "@/components/ui/globe";

// BizzBuzz's two real offices (same coordinates as the address cards on
// /contact) — marked on the globe instead of a placeholder location.
const OFFICE_MARKERS = [
  { lat: 25.4358, lng: 81.8463 }, // Prayagraj, India
  { lat: 51.5072, lng: -0.1276 }, // London, UK
];

export default function GlobeTrust() {
  return (
    <section className="bg-black text-white pt-2 md:pt-3 pb-3 md:pb-4 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* items-center (not items-end) so the text sits level with the
          globe's own visual center, instead of pinned to the bottom of a
          much taller box. */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Text — vertically centered against the globe. */}
        <div className="max-w-xs sm:max-w-sm">
          <p className="text-lg sm:text-xl text-white/70 font-light mb-1">
            We&rsquo;re Trusted by Businesses
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Across Prayagraj &amp; Beyond
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            From local shops to growing enterprises, we&rsquo;ve helped
            businesses across Prayagraj and India build a digital presence
            that actually drives leads and sales — real results, not vanity
            metrics.
          </p>
        </div>

        {/* Interactive 3D globe — real dot-mapped world map (Three.js +
            d3-geo), drag to spin, markers on our actual India + UK
            offices. Replaces the old orbiting-rings visual. */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] shrink-0">
          <Globe
            speed={1.5}
            direction="left"
            scale={8}
            smoothing={8}
            dragSpeed={5}
            stopOnHover
            oceanColor="#000000"
            outlineColor="#40A2D8"
            outlineWidth={1}
            showGrid
            graticuleColor="rgba(64,162,216,0.18)"
            dots={{ color: "#40A2D8", size: 4, density: 7, allDots: false }}
            markerConfig={{ markers: OFFICE_MARKERS, color: "#ffffff", size: 55 }}
            initialLatitude={20}
            initialLongitude={-15}
          />
        </div>
      </div>
    </section>
  );
}
