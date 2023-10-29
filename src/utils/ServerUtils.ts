import { ILighting, IRain } from "@/interfaces/Interfaces";
import moment from "moment";
import fs from "fs";
import { Parser } from "@json2csv/plainjs";

export type CsvType = {
  Tarih: string;
  Enlem: number;
  Boylam: number;
  YagisMiktari: number;
  YildirimAdeti: number;
};

enum SEASON {
  SPRING = "Spring",
  SUMMER = "Summer",
  AUTUMIN = "Autumin",
  WINTER = "Winter",
}

export const LatLon = {
  ankara: [39.9727, 32.8637],
  istanbul: [40.911, 29.1558],
  izmir: [38.3949, 27.0819],
};

export const dateToSeason = (
  latLon: number[],
  jsonRain: IRain[],
  jsonLighting: ILighting[],
  city: string,
  year: string
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

  writeFileJson(city, year, SEASON.SPRING, spring, true);
  writeFileJson(city, year, SEASON.SUMMER, summer, true);
  writeFileJson(city, year, SEASON.AUTUMIN, autumin, true);
  writeFileJson(city, year, SEASON.WINTER, winter, true);
};

const writeFileJson = (
  city: string,
  year: string,
  season: SEASON,
  array: any[],
  isCsv?: boolean
) => {
  let dataMan = "";

  if (isCsv) {
    const parser = new Parser();
    dataMan = parser.parse(array);
  }

  fs.writeFileSync(
    `./${city}${year}${season}.${isCsv ? "csv" : "json"}`,
    isCsv ? dataMan : JSON.stringify(array),
    "utf8"
  );
};
