/**
 * Utility functions for date and time formatting
 */

import { en } from "./locales/translate/en";

// Type for translation function
type TranslationFunction = (key: any) => string;

/**
 * Format a date string to relative time (e.g., "1 second ago", "5 minutes ago", "2 weeks ago")
 * Similar to the implementation in mapViewListItem.tsx but with more granular time units
 *
 * @param dateString - ISO date string or Date object
 * @param t - Translation function (optional, defaults to English)
 * @returns Formatted relative time string
 */
export const formatRelativeTime = (
  dateString: string | Date,
  t?: TranslationFunction
): string => {
  // Default translation function that returns English
  const translate = t || ((key: any) => key);

  if (!dateString) return translate(en.recently);

  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;
  const now = new Date();

  // Calculate differences in various units
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  // Return appropriate format based on time difference
  if (diffInSeconds < 60) {
    const unit =
      diffInSeconds <= 1 ? translate(en.second) : translate(en.seconds);
    return `${diffInSeconds} ${unit} ${translate(en.ago)}`;
  }

  if (diffInMinutes < 60) {
    const unit =
      diffInMinutes === 1 ? translate(en.minute) : translate(en.minutes);
    return `${diffInMinutes} ${unit} ${translate(en.ago)}`;
  }

  if (diffInHours < 24) {
    const unit = diffInHours === 1 ? translate(en.hour) : translate(en.hours);
    return `${diffInHours} ${unit} ${translate(en.ago)}`;
  }

  if (diffInDays < 7) {
    const unit = diffInDays === 1 ? translate(en.day) : translate(en.days);
    return `${diffInDays} ${unit} ${translate(en.ago)}`;
  }

  if (diffInWeeks < 4) {
    const unit = diffInWeeks === 1 ? translate(en.week) : translate(en.weeks);
    return `${diffInWeeks} ${unit} ${translate(en.ago)}`;
  }

  if (diffInMonths < 12) {
    const unit =
      diffInMonths === 1 ? translate(en.month) : translate(en.months);
    return `${diffInMonths} ${unit} ${translate(en.ago)}`;
  }

  const unit = diffInYears === 1 ? translate(en.year) : translate(en.years);
  return `${diffInYears} ${unit} ${translate(en.ago)}`;
};

/**
 * Format date to absolute format (e.g., "Jan 15, 2024")
 * Used for dates older than a certain threshold
 *
 * @param dateString - ISO date string or Date object
 * @param locale - Optional locale string (e.g., "vi-VN", "fi-FI", "en-US"). Defaults to "en-US"
 * @returns Formatted date string
 */
export const formatAbsoluteDate = (
  dateString: string | Date,
  locale: string = "en-US"
): string => {
  if (!dateString) return "Unknown date";

  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString(locale, options);
};
