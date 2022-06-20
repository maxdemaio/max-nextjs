export type Track = {
    songUrl: string;
    artist: string;
    title: string;
  };

export type TopTracks = {
    tracks: Track[];
};

export type Video = {
    title: string;
    date: Date;
}