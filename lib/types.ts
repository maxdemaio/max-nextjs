// all types of responses that I fetch from external apis

// spotify api
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
export type ETrack = {
  ranking: number;
  songUrl: string;
  artist: string;
  title: string;
};

export type ETracks = {
  tracks: ETrack[];
};

// youtube api
// https://developers.google.com/youtube/v3/docs/
export type EYoutubeStats = {
  commentCount?: string | null;
  hiddenSubscriberCount?: boolean | null;
  subscriberCount?: string;
  viewCount?: string;
  videoCount?: string;
};

export type EYoutubeVideo = {
  id: number;
  videoId: string;
  title: string;
  publishedAt: string;
};

export type EYoutube = {
  stats: EYoutubeStats;
  videos: EYoutubeVideo[];
};

export type EChessGame = {};

export type EChessGames = {
  games: EChessGame[];
};
