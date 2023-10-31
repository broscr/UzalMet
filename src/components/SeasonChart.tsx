"use client";

import { Props } from "@/interfaces/Interfaces";
import { dateToNumber, numberToDate } from "@/utils/Utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  RadialLinearScale,
} from "chart.js";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import CustomTable from "./CustomTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  RadialLinearScale
);

type PropsIn = {
  stationData: Props;
};

const SeasonChart = ({ stationData }: PropsIn) => {
  const [switchStat, setSwitchStat] = useState(false);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${stationData.date} ${stationData.station} ${stationData.city} 15 KM Yarıçap`,
      },
      // tooltip: {
      //   callbacks: {
      //     label: (context: any) => {
      //       const data = context.dataset.data[context.dataIndex];
      //       return [
      //         `Yıldırım ve Şimşek: ${data.r <= 100 ? data.r : "100+"}`,
      //         `Gerçek Değer: ${data.r}`,
      //       ];
      //     },
      //   },
      // },
    },
    scales: {
      x: {
        display: true,
        position: "bottom",
        type: "category",
        ticks: {
          align: "center",
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        position: "right",
        ticks: {
          align: "center",
          color: "#1D9FF5",
        },
      },
      y2: {
        display: true,
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "center",
          color: "#FF3F69",
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        type: "line",
        label: "Yağış (mm)",
        data: stationData.rain
          .sort(
            (a, b) =>
              dateToNumber(a.DATATARIH.toString(), "YYYYMMDDHH") -
              dateToNumber(b.DATATARIH.toString(), "YYYYMMDDHH")
          )
          .map((item) => ({
            x: numberToDate(item.DATATARIH),
            y: item.TOPLAM_YAGIS,
          })),
        borderColor: "#1D9FF5",
        yAxisID: "y",
        xAxisID: "x",
      },
      {
        type: "bubble",
        label: "Yıldırım ve Şimşek (Adet)",
        data: stationData.rain
          .map((item) => ({
            x: numberToDate(item.DATATARIH),
            y: stationData.lighting.filter(
              (i) =>
                dateToNumber(i.DATATARIH) ==
                dateToNumber(item.DATATARIH.toString(), "YYYYMMDDHH")
            ).length,
          }))
          .map((i) => ({ x: i.x, y: i.y, r: i.y > 100 ? 100 : i.y })),
        yAxisID: "y2",
        backgroundColor: "rgba(255,22,0,0.5)",
        borderColor: "#FF3F69",
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <Form.Check
          type="switch"
          id="viewType"
          label="Tablo Görünümü"
          className="viewSwitch"
          checked={switchStat}
          onChange={() => setSwitchStat(!switchStat)}
        />
        <Chart
          options={options}
          data={data}
          className={`${switchStat ? "d-none" : "d-visible"}`}
          redraw
        />
      </div>
      {switchStat && <CustomTable stationData={stationData} />}
    </>
  );
};

export default SeasonChart;
