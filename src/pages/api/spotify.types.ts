// Represents the entire response for show episodes
export interface ShowEpisodesResponse {
  href: string; // The link to the API endpoint
  items: Episode[]; // Array of episode objects
  limit: number; // Maximum number of items in the response
  next: string | null; // URL to the next page of items
  offset: number; // The offset of the items returned
  previous: string | null; // URL to the previous page of items
  total: number; // Total number of episodes available
}

// Represents an individual episode
export interface Episode {
  audio_preview_url: string; // URL to the audio preview
  description: string; // Text description of the episode
  duration_ms: number; // Duration of the episode in milliseconds
  explicit: boolean; // Indicates if the content is explicit
  external_urls: ExternalUrls; // External URLs related to the episode
  href: string; // API link to the episode
  html_description: string; // HTML formatted description
  id: string; // Unique identifier for the episode
  images: Image[]; // Array of image objects
  is_externally_hosted: boolean; // Indicates if the episode is externally hosted
  is_playable: boolean; // Indicates if the episode is playable
  language: string; // Primary language of the episode
  languages: string[]; // Array of languages in the episode
  name: string; // Name/title of the episode
  release_date: string; // Release date of the episode
  release_date_precision: string; // Precision of the release date (e.g., day, month, year)
  type: string; // Type of the item (e.g., episode)
  uri: string; // Spotify URI for the episode
}

// Represents external URLs related to the episode
export interface ExternalUrls {
  spotify: string; // Spotify URL for the episode
  // Add other external URLs if available
}

// Represents an image associated with the episode
export interface Image {
  height: number; // Height of the image in pixels
  url: string; // URL to the image
  width: number; // Width of the image in pixels
}
