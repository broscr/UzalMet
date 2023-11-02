import { Props } from "@/interfaces/Interfaces";
import fs from "fs";
import { Parser } from "@json2csv/plainjs";
import { numberToDate } from "./Utils";

export const writeFile = (props: Props) => {
  let dataMan = "";

  const array: any = [];

  props.rain.forEach((i) => {
    const tYts = props.lighting.filter((it) => {
      const itemDate = new Date(it.DATATARIH);
      const itemHour = itemDate.getHours();
      return itemHour === new Date(numberToDate(i.DATATARIH)).getHours();
    }).length;

    if (i.TOPLAM_YAGIS != 0 || tYts != 0) {
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
        totalLighting: tYts,
      });
    }
  });

  const parser = new Parser();
  dataMan = parser.parse(array);

  fs.writeFileSync(
    `./src/resources/csv/${props.date}_${props.no}.csv`,
    dataMan,
    "utf8"
  );
};
