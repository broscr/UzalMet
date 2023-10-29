"use client";

import { SEASON, pixelValue } from "@/utils/Utils";
import { CsvType } from "@/utils/Utils";
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

type Props = {
  city: string;
  year: number;
  rainData: {
    spring: CsvType[];
    summer: CsvType[];
    autumin: CsvType[];
    winter: CsvType[];
  };
};

const SeasonChart = ({ city, year, rainData }: Props) => {
  const [selectedSeason, setSelectedSeason] = useState<SEASON>(SEASON.SPRING);
  const [valueSeason, setValueSeason] = useState<CsvType[]>(rainData.spring);

  const options = {
    responsive: true,
    aspectRatio: 2.2,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${year} Yılı ${city} 15 KM Yarıçap`,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const data = context.dataset.data[context.dataIndex];
            return [
              `Yıldırım ve Şimşek: ${data.z <= 100 ? data.z : "100+"}`,
              `Gerçek Değer: ${data.z}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        position: "bottom",
        type: "category",
        labels: valueSeason.map((item) => item.Tarih.split(" ")[0]),
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
    },
  };

  const data = {
    datasets: [
      {
        type: "line",
        label: "Yağış (mm)",
        data: valueSeason
          .sort((a, b) => a.YagisMiktari - b.YagisMiktari)
          .map((item) => ({
            x: item.Tarih.split(" ")[0],
            y: item.YagisMiktari,
          }))
          .map((row) => ({
            x: row.x,
            y: row.y,
          })),
        borderColor: "#1D9FF5",
        yAxisID: "y",
        xAxisID: "x",
      },
      {
        type: "bubble",
        label: "Yıldırım ve Şimşek (Adet)",
        data: valueSeason
          .sort((a, b) => a.YagisMiktari - b.YagisMiktari)
          .map((item) => ({
            x: item.Tarih.split(" ")[0],
            y: item.YagisMiktari,
            r: item.YildirimAdeti,
            z: item.YildirimAdeti,
          }))
          .map((row) => ({
            x: row.x,
            y: row.y,
            r: row.r >= 100 ? 100 : row.r,
            z: row.z,
          })),
        backgroundColor: "rgba(255,22,0,0.5)",
        borderColor: "#FF3F69",
      },
    ],
  };

  useEffect(() => {
    switch (selectedSeason) {
      case SEASON.SPRING:
        setValueSeason(rainData.spring);
        break;
      case SEASON.SUMMER:
        setValueSeason(rainData.summer);
        break;
      case SEASON.AUTUMIN:
        setValueSeason(rainData.autumin);
        break;
      case SEASON.WINTER:
        setValueSeason(rainData.winter);
        break;
      default:
        setValueSeason(rainData.spring);
        break;
    }
  }, [
    rainData.autumin,
    rainData.spring,
    rainData.summer,
    rainData.winter,
    selectedSeason,
  ]);

  return (
    <div>
      <Form.Group className="d-flex justify-content-center m-2">
        <Form.Select
          aria-label="İl Seçin"
          className="ms-2 me-2 w-auto"
          defaultValue={selectedSeason}
          value={selectedSeason}
          onChange={(e) => {
            setSelectedSeason(e.target.value as SEASON);
          }}
        >
          <option>Mevsim Seçin</option>
          <option value="Spring">İlkbahar</option>
          <option value="Summer">Yaz</option>
          <option value="Autumin">Sonbahar</option>
          <option value="Winter">Kış</option>
        </Form.Select>
      </Form.Group>
      <Chart options={options} data={data} />
    </div>
  );
};

export default SeasonChart;
