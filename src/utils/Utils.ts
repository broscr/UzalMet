import moment from "moment";

export const numberToDate = (date: number) => {
  const dateString = moment(date.toString(), "YYYYMMDDHH").format(
    "YYYY-MM-DD HH:mm"
  );
  return dateString;
};

export const dateToNumber = (date: string, format?: string) => {
  const dateString = moment(date, format).format("YYYY-MM-DD HH");

  const dateNumber = moment(dateString).toDate().getTime();

  return dateNumber;
};
