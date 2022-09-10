import LoadingTrack from "./LoadingTrack";

export default function LoadingTracks() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((rank) => (
        <LoadingTrack ranking={rank + 1} />
      ))}
    </>
  );
}
