import useSWR from "swr";

import fetcher from "lib/fetcher";
import Track from "./Track";
import { ETopTracks } from "lib/types";
import LoadingTracks from "./LoadingTracks";

export default function Tracks() {
  // asynch call to spotify api done on backend
  const { data } = useSWR<ETopTracks>("/api/topTracks", fetcher);

  // while there's no data return loading content
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
