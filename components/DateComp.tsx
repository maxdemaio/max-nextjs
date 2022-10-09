import { parseISO, format } from "date-fns";

export default function DateComp(props: IDateCompProps) {
  const date = parseISO(props.dateString);
  return (
    <time dateTime={props.dateString}>{format(date, "LLLL d, yyyy")}</time>
  );
}

export interface IDateCompProps {
  dateString: string;
}
