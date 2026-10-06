// Returns the featured image URL for a blog post (Cloudinary-hosted).
export function getFeaturedImage(post) {
  return post?.featuredImage || null;
}

// Cloudinary delivers the original upload by default (often a multi-MB
// PNG/JPG). Inserting f_auto,q_auto,w_<n> right after "/upload/" makes it
// serve a right-sized WebP/AVIF instead — the big mobile LCP win for blog
// posts. Non-Cloudinary URLs are returned untouched.
const CLOUDINARY_UPLOAD = "/image/upload/";

export function optimizedImageUrl(url, width) {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes(CLOUDINARY_UPLOAD)) {
    return url;
  }
  return url.replace(CLOUDINARY_UPLOAD, `${CLOUDINARY_UPLOAD}f_auto,q_auto,w_${width}/`);
}

export function imageSrcSet(url, widths = [480, 768, 1100]) {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes(CLOUDINARY_UPLOAD)) {
    return undefined;
  }
  return widths.map((w) => `${optimizedImageUrl(url, w)} ${w}w`).join(", ");
}
