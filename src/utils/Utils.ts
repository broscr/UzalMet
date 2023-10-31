import { ILighting, IRain } from "@/interfaces/Interfaces";
import moment from "moment";

export const pixelValue = (scale: any, v: any) => {
  const val = scale.getValueForPixel(v);
  return Math.trunc(isNaN(val) ? v * 6 : 3);
};

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

export const dateFormat = (date: string) => {
  return moment(date).format("yyyy-MM-DD HH:mm");
};

export type CsvType = {
  Tarih: string;
  Enlem: number;
  Boylam: number;
  YagisMiktari: number;
  YildirimAdeti: number;
};

export const LatLon = {
  ankara: [39.9727, 32.8637],
  istanbul: [40.911, 29.1558],
  izmir: [38.3949, 27.0819],
};

export enum SEASON {
  SPRING = "Spring",
  SUMMER = "Summer",
  AUTUMIN = "Autumin",
  WINTER = "Winter",
}

export const dateToSeason = (
  latLon: number[],
  jsonRain: IRain[],
  jsonLighting: ILighting[]
) => {
  const spring: CsvType[] = [];
  const summer: CsvType[] = [];
  const autumin: CsvType[] = [];
  const winter: CsvType[] = [];

  const pushData = (item: IRain) => {
    return {
      Tarih: moment(item.TARIH).format("DD.MM.YYYY HH:mm").toString(),
      Enlem: latLon[0],
      Boylam: latLon[1],
      YagisMiktari: item.TOP_YAGIS_0606,
      YildirimAdeti: jsonLighting.filter(
        (i) =>
          moment(i.DATATARIH).format("DDMMYYYY").toString() ==
          moment(item.TARIH).format("DDMMYYYY").toString()
      ).length,
    };
  };

  jsonRain.forEach((item) => {
    const month = moment(item.TARIH).month();

    if (month === 11 || month === 0 || month === 1) {
      winter.push(pushData(item));
    } else if (month === 2 || month === 3 || month === 4) {
      spring.push(pushData(item));
    } else if (month === 5 || month === 6 || month === 7) {
      summer.push(pushData(item));
    } else {
      autumin.push(pushData(item));
    }
  });

  return { spring, summer, autumin, winter };
};
