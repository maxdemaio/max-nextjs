// all types of responses that I fetch from external apis

// spotify api
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
export type ETrack = {
  ranking: number;
  songUrl: string;
  artist: string;
  title: string;
};

export type ETopTracks = {
  tracks: ETrack[];
};

// youtube api
// https://developers.google.com/youtube/v3/docs/
export type EYoutubeVideo = {
  id: number;
  videoId: string;
  title: string;
  publishedAt: string;
};

export type EYouTube = {
  subscriberCount: number;
  viewCount: number;
  videoCount: number;
  videos: EYoutubeVideo[];
};
