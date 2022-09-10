import useSWR from "swr";

import fetcher from "lib/fetcher";
import Track from "./Track";
import { TopTracks } from "lib/types";
import LoadingTracks from "./LoadingTracks";

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/spotify/topTracks", fetcher);

  if (!data) {
    return <LoadingTracks />;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
