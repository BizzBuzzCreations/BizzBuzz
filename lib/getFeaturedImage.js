// Returns the featured image URL for a blog post (Cloudinary-hosted).
export function getFeaturedImage(post) {
  return post?.featuredImage || null;
}
