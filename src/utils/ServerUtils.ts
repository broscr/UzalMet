import { Props } from "@/interfaces/Interfaces";
import fs from "fs";
import { Parser } from "@json2csv/plainjs";
import { numberToDate } from "./Utils";

/**
 * writeFile function generates and writes CSV file for a specific station and date, including rain and lighting data.
 * @param props - Properties object containing rain, lighting, station details, and date information.
 */
export const writeFile = (props: Props) => {
  // Initialize an empty string to store CSV data
  let dataMan = "";

  // Initialize an empty array to store formatted data
  const array: any = [];

  // Iterate through rain data and filter corresponding lighting data
  props.rain.forEach((i) => {
    const tYts = props.lighting.filter((it) => {
      const itemDate = new Date(it.DATATARIH);
      const itemHour = itemDate.getHours();
      return itemHour === new Date(numberToDate(i.DATATARIH)).getHours();
    }).length;

    // Add data to array if rain or lighting data is present
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

  // Create a CSV parser
  const parser = new Parser();
  // Parse array data to CSV format
  dataMan = parser.parse(array);

  // Write CSV data to a file
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

/**
 * writeFileDaily function generates and writes a daily summary CSV file for an array of station properties.
 * @param props - Array of properties objects containing rain, lighting, station details, and date information.
 */
export const writeFileDaily = (props: Props[]) => {
  // Initialize an empty string to store CSV data
  let dataMan = "";

  // Initialize an empty array to store formatted data
  let dataPush: any[] = [];

  // Iterate through array of properties and calculate daily rain and lighting
  props.forEach((i) => {
    const dailyRain = i.rain.reduce((acc, obj) => acc + obj.TOPLAM_YAGIS, 0);

    const dailyLighting = i.lighting.length;

    // Create a result object for daily summary
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

    // Add result object to dataPush array
    dataPush.push(result);
  });

  // Create a CSV parser
  const parser = new Parser();
  // Parse dataPush array to CSV format
  dataMan = parser.parse(dataPush);

  // Write CSV data to a file
  fs.writeFileSync(`./src/resources/csv/All_Stations.csv`, dataMan, "utf8");
};

/**
 * writeFileAll function generates and writes a CSV file for all stations, including rain and lighting data.
 * @param props - Array of properties objects containing rain, lighting, station details, and date information for multiple stations.
 */
export const writeFileAll = (props: Props[]) => {
  // Initialize an empty string to store CSV data
  let dataMan = "";

  // Initialize an empty array to store formatted data
  const array: any = [];

  // Iterate through array of properties and rain data, and filter corresponding lighting data
  props.forEach((i) => {
    i.rain.forEach((it) => {
      const tYts = i.lighting.filter((iti) => {
        const itemDate = new Date(iti.DATATARIH);
        const itemHour = itemDate.getHours();
        return itemHour === new Date(numberToDate(it.DATATARIH)).getHours();
      }).length;

      // Add data to array if rain or lighting data is present
      if (it.TOPLAM_YAGIS != 0 || tYts != 0) {
        array.push({
          stationNo: i.no,
          stationName: i.station,
          stationCity: i.city,
          date: i.date,
          latitude: i.latitude,
          longitude: i.longitude,
          day: i.date,
          hours: it.SAAT,
          totalRain: it.TOPLAM_YAGIS.toFixed(1).replace(".", ","),
          totalLighting: tYts,
        });
      }
    });
  });

  // Create a CSV parser
  const parser = new Parser();
  // Parse array data to CSV format
  dataMan = parser.parse(array);

  // Write CSV data to a file
  try {
    fs.writeFileSync(`./src/resources/csv/all.csv`, dataMan, "utf8");
  } catch (error) {
    console.log("Exception => ", error);
  }
};
