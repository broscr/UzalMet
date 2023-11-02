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

  try {
    fs.writeFileSync(
      `./src/resources/csv/${props.date}_${props.no}.csv`,
      dataMan,
      "utf8"
    );
  } catch (error) {
    console.log("Exception => ", error);
  }
};

export const writeFileDaily = (props: Props[]) => {
  let dataMan = "";

  let dataPush: any[] = [];

  props.forEach((i) => {
    const dailyRain = i.rain.reduce((acc, obj) => acc + obj.TOPLAM_YAGIS, 0);

    const dailyLighting = i.lighting.length;

    const result = {
      stationNo: i.no,
      stationName: i.station,
      stationCity: i.city,
      date: i.date,
      latitude: i.latitude,
      longitude: i.longitude,
      totalRain: dailyRain,
      totalLighting: dailyLighting,
    };

    dataPush.push(result);
  });

  const parser = new Parser();
  dataMan = parser.parse(dataPush);

  fs.writeFileSync(`./src/resources/csv/All_Stations.csv`, dataMan, "utf8");
};
