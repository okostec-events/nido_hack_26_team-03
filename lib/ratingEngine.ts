import { Resource } from './mockData';

export function calculateRating(resource: Resource): number {
  // Normalize popularity (views or enrollments)
  const popularity = resource.views || resource.enrollments || 0;
  const popularityNormalized = Math.min(popularity / 1000000, 1); // Cap at 1M

  // Sentiment score based on rating (0-5 scale normalized to 0-1)
  const sentimentScore = resource.rating / 5;

  // Recommendation score based on review count
  const reviewCount = resource.reviewCount;
  const recommendationScore = Math.min(Math.log(reviewCount + 1) / Math.log(500000), 1);

  // Calculate final score
  const score = (0.4 * popularityNormalized) + (0.4 * sentimentScore) + (0.2 * recommendationScore);

  // Convert to 1-5 star rating
  const rating = 1 + (score * 4);

  // Round to nearest 0.5
  return Math.round(rating * 2) / 2;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function getRatingStars(rating: number): { full: number; half: boolean; empty: number } {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return { full, half, empty };
}
