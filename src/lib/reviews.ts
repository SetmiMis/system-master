export type Review = { author: string; text: string; rating: number };
export type ReviewData = { rating: number; count: number; reviews: Review[] };

// Fallback: real Google reviews, used until GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are set in Vercel.
const fallback: ReviewData = {
  rating: 4.9,
  count: 300,
  reviews: [
    { author: "Google review", rating: 5, text: "Big variety, fix price, large display, good staff and owner always present." },
    { author: "Google review", rating: 5, text: "Product quality, service, and customer handling are excellent." },
    { author: "Google review", rating: 5, text: "Staff are good and having good manner and rates are reasonable." },
  ],
};

// Live data via Google Places API (New); hourly refresh. Returns the 5 reviews Google exposes.
export async function getReviews(): Promise<ReviewData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const id = process.env.GOOGLE_PLACE_ID;
  if (!key || !id) return fallback;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${id}`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,reviews" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;
    const d = await res.json();
    const reviews: Review[] = (d.reviews ?? [])
      .filter((r: { rating?: number; text?: { text?: string } }) => (r.rating ?? 0) >= 4 && r.text?.text)
      .map((r: { rating: number; text: { text: string }; authorAttribution?: { displayName?: string } }) => ({
        author: r.authorAttribution?.displayName ?? "Google review",
        text: r.text.text,
        rating: r.rating,
      }));
    return { rating: d.rating ?? fallback.rating, count: d.userRatingCount ?? fallback.count, reviews: reviews.length ? reviews : fallback.reviews };
  } catch {
    return fallback;
  }
}
