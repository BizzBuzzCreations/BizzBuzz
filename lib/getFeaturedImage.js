// Returns the best available featured image URL for a WP post,
// falling back to the embedded featured media when Yoast head data is missing.
export function getFeaturedImage(post) {
  return (
    post?.yoast_head_json?.og_image?.[0]?.url ||
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null
  );
}
