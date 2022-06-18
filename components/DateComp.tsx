import {parseISO, format} from 'date-fns';

export default function DateComp({dateString}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
