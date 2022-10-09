import { EYoutubeVideo } from "lib/types";
import DateComp from "./DateComp";

export default function VidDisplayListItem(props: IVidDisplayListItemProps) {
  return (
    <div className="opacity-80 hover:opacity-100">
      <a href={"https://www.youtube.com/watch?v=" + props.vid.videoId}>
        <h2 className="text-black dark:text-white">{props.vid.title}</h2>
        <p className="text-gray-500 dark:text-gray-500">
          <DateComp dateString={props.vid.publishedAt} />
        </p>
      </a>
    </div>
  );
}

export interface IVidDisplayListItemProps {
  key: number;
  vid: EYoutubeVideo;
}
