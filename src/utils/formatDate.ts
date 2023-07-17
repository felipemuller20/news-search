import { format } from 'date-fns';

export function convertDateFormat(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = format(date, 'dd/MM/yyyy');
  return formattedDate;
}
