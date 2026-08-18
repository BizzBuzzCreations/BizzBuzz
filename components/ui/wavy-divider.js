// A smooth, curvy wave line used to visually separate two same-colored
// (usually dark) sections that would otherwise blend into each other with
// no clear edge. Built as a single smooth SVG path (quadratic-bezier
// humps, not straight zigzag segments) stretched to 100% width, so it
// stays crisp and smooth at any container width.
function buildWavePath(waves, width, height) {
  const segment = width / waves;
  const mid = height / 2;
  let path = `M 0 ${mid}`;

  // Two control points sharing the peak's Y (rather than one, as a simple
  // Q-curve would use) give each hump a flat, rounded crest — and because
  // both points sit a quarter-segment in from either end, the tangent lines
  // up across each midline crossing, so consecutive humps flow into one
  // another instead of meeting at a visible kink.
  for (let i = 0; i < waves; i++) {
    const x0 = i * segment;
    const xEnd = x0 + segment;
    const peakY = i % 2 === 0 ? 0 : height;
    const c1x = x0 + segment / 4;
    const c2x = xEnd - segment / 4;
    path += ` C ${c1x} ${peakY}, ${c2x} ${peakY}, ${xEnd} ${mid}`;
  }

  return path;
}

export default function WavyDivider({
  color = "rgba(255,255,255,0.18)",
  height = 24,
  waves = 12,
  strokeWidth = 2.5,
  className = "",
}) {
  const d = buildWavePath(waves, 1000, height);

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 1000 ${height}`}
      preserveAspectRatio="none"
      className={`w-full block ${className}`}
      style={{ height }}
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
    </svg>
  );
}
