import Track from "./Track";
import { ETracks } from "lib/types";

export default function Tracks(props: ETracks) {
  return (
    <>
      {props.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
