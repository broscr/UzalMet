import { ILighting, IRain, Props } from "@/interfaces/Interfaces";
import moment from "moment";
import fs from "fs";
import { Parser } from "@json2csv/plainjs";
import { numberToDate } from "./Utils";

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

export const dateToCsvType = (
  latLon: number[],
  jsonRain: IRain[],
  jsonLighting: ILighting[],
  city: string,
  year: string
) => {
  const pushData = (item: IRain) => {
    return {
      Tarih: moment(item.DATATARIH).format("DD.MM.YYYY HH:mm").toString(),
      Enlem: latLon[0],
      Boylam: latLon[1],
      YagisMiktari: item.TOPLAM_YAGIS,
      YildirimAdeti: jsonLighting.filter(
        (i) =>
          moment(i.DATATARIH).format("DDMMYYYY").toString() ==
          moment(item.DATATARIH).format("DDMMYYYY").toString()
      ).length,
    };
  };
};

export const writeFile = (props: Props) => {
  let dataMan = "";

  const array: any = [];

  props.rain.forEach((i) => {
    array.push({
      stationNo: props.no,
      stationName: props.station,
      stationCity: props.city,
      date: props.date,
      latitude: props.latitude,
      longitude: props.longitude,
      day: props.date,
      hours: i.SAAT,
      totalRain: i.TOPLAM_YAGIS.toFixed(1).replace(".", ","),
      totalLighting: props.lighting.filter((it) => {
        const itemDate = new Date(it.DATATARIH);
        const itemHour = itemDate.getHours();
        return itemHour === new Date(numberToDate(i.DATATARIH)).getHours();
      }).length,
    });
  });

  const parser = new Parser();
  dataMan = parser.parse(array);

  fs.writeFileSync(`./${props.date}_${props.no}.csv`, dataMan, "utf8");
};
