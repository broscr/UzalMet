"use client";
import { ILighting, IRain } from "@/interfaces/Interfaces";
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
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Data from "@/resources/Data";

const setYearText = (value: number): string => {
  switch (value) {
    case 1:
      return "2018";
    case 2:
      return "2019";
    case 3:
      return "2020";
    case 4:
      return "2021";
    case 5:
      return "2022";
    default:
      return "2018";
  }
};
const setCityText = (value: number): string => {
  switch (value) {
    case 1:
      return "17130 Ankara Bölge lat: 39.9727 lon: 32.8637";
    case 2:
      return "17064 İstanbul Bölge lat: 40.911 lon: 29.1558";
    case 3:
      return "17220 İzmir Bölge lat: 38.3949	lon: 27.0819";
    default:
      return "17130 Ankara Bölge lat: 39.9727 lon: 32.8637";
  }
};

const MyChart = () => {
  const [selectedYear, setSelectedYear] = useState(1);
  const [selectedCity, setSelectedCity] = useState(1);
  const [rainData, setRainData] = useState(Data.ankara2020);
  const [lightningData, setLightningData] = useState(Data.ankara2020Yts);
  const [options, setOptions] = useState({
    responsive: true,
    aspectRatio: 2.1,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${setYearText(selectedYear)} Yılı ${setCityText(
          selectedCity
        )} 15 KM Yarıçap`,
      },
    },
    scales: {
      x: {
        display: true,
        position: "bottom",
        type: "category",
        labels: rainData.map((item) => item.TARIH.split("T")[0]),
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
  });
  const [data, setData] = useState({
    datasets: [
      {
        type: "line",
        label: "Yağış (mm)",
        data: rainData
          .sort((a, b) => a.TOP_YAGIS_0606 - b.TOP_YAGIS_0606)
          .map((item) => ({
            x: new Date(item.TARIH),
            y: item.TOP_YAGIS_0606,
            r: lightningData
              .filter((item) =>
                rainData
                  .map((item) => item.TARIH.split("T")[0])
                  .includes(item.DATATARIH.split("T")[0])
              )
              .filter(
                (it) => it.DATATARIH.split("T")[0] == item.TARIH.split("T")[0]
              ),
          }))
          .map((row) => ({
            x: row.x,
            y: row.y,
            r: row.r,
          })),
        borderColor: "#1D9FF5",
        yAxisID: "y",
        xAxisID: "x",
      },
      {
        type: "bubble",
        label: "Yıldırım ve Şimşek (Adet)",
        data: rainData
          .sort((a, b) => a.TOP_YAGIS_0606 - b.TOP_YAGIS_0606)
          .map((item) => ({
            x: new Date(item.TARIH),
            y: item.TOP_YAGIS_0606,
            r: lightningData
              .filter((item) =>
                rainData
                  .map((item) => item.TARIH.split("T")[0])
                  .includes(item.DATATARIH.split("T")[0])
              )
              .filter(
                (it) => it.DATATARIH.split("T")[0] == item.TARIH.split("T")[0]
              ),
          }))
          .map((row) => ({
            x: row.x,
            y: row.y,
            r: row.r.length > 100 ? 100 : row.r.length,
          })),
        backgroundColor: "rgba(255,22,0,0.5)",
        borderColor: "#FF3F69",
      },
    ],
  });

  const setDataDefault = () => {
    setOptions({
      responsive: true,
      aspectRatio: 2.1,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: `${setYearText(selectedYear)} Yılı ${setCityText(
            selectedCity
          )} 15 KM Yarıçap`,
        },
      },
      scales: {
        x: {
          display: true,
          position: "bottom",
          type: "category",
          labels: rainData.map((item) => item.TARIH.split("T")[0]),
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
    });
    setData({
      datasets: [
        {
          type: "line",
          label: "Yağış (mm)",
          data: rainData
            .sort((a, b) => a.TOP_YAGIS_0606 - b.TOP_YAGIS_0606)
            .map((item) => ({
              x: new Date(item.TARIH),
              y: item.TOP_YAGIS_0606,
              r: lightningData
                .filter((item) =>
                  rainData
                    .map((item) => item.TARIH.split("T")[0])
                    .includes(item.DATATARIH.split("T")[0])
                )
                .filter(
                  (it) => it.DATATARIH.split("T")[0] == item.TARIH.split("T")[0]
                ),
            }))
            .map((row) => ({
              x: row.x,
              y: row.y,
              r: row.r,
            })),
          borderColor: "#1D9FF5",
          yAxisID: "y",
          xAxisID: "x",
        },
        {
          type: "bubble",
          label: "Yıldırım ve Şimşek (Adet)",
          data: rainData
            .sort((a, b) => a.TOP_YAGIS_0606 - b.TOP_YAGIS_0606)
            .map((item) => ({
              x: new Date(item.TARIH),
              y: item.TOP_YAGIS_0606,
              r: lightningData
                .filter((item) =>
                  rainData
                    .map((item) => item.TARIH.split("T")[0])
                    .includes(item.DATATARIH.split("T")[0])
                )
                .filter(
                  (it) => it.DATATARIH.split("T")[0] == item.TARIH.split("T")[0]
                ),
            }))
            .map((row) => ({
              x: row.x,
              y: row.y,
              r: row.r.length > 100 ? 100 : row.r.length,
            })),
          backgroundColor: "rgba(255,22,0,0.5)",
          borderColor: "#FF3F69",
        },
      ],
    });
  };

  useEffect(() => {
    setDataDefault();
  }, [rainData, lightningData]);

  return (
    <>
      <Form.Group className="d-flex w-100 justify-content-center">
        <Form.Select
          aria-label="İl Seçin"
          className="ms-2 me-2 w-25"
          defaultValue={selectedCity}
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(Number(e.target.value));
            switch (Number(e.target.value)) {
              case 1:
                if (selectedYear === 1) {
                  setRainData(Data.ankara2020);
                  setLightningData(Data.ankara2020Yts);
                } else if (selectedYear === 2) {
                  setRainData(Data.ankara2021);
                  setLightningData(Data.ankara2021Yts);
                } else if (selectedYear === 3) {
                  setRainData(Data.ankara2022);
                  setLightningData(Data.ankara2022Yts);
                }
                break;
              case 2:
                if (selectedYear === 1) {
                  setRainData(Data.istanbul2020);
                  setLightningData(Data.istanbul2020Yts);
                } else if (selectedYear === 2) {
                  setRainData(Data.istanbul2021);
                  setLightningData(Data.istanbul2021Yts);
                } else if (selectedYear === 3) {
                  setRainData(Data.istanbul2022);
                  setLightningData(Data.istanbul2022Yts);
                }
                break;
              case 3:
                if (selectedYear === 1) {
                  setRainData(Data.izmir2020);
                  setLightningData(Data.izmir2020Yts);
                } else if (selectedYear === 2) {
                  setRainData(Data.izmir2021);
                  setLightningData(Data.izmir2021Yts);
                } else if (selectedYear === 3) {
                  setRainData(Data.izmir2022);
                  setLightningData(Data.izmir2022Yts);
                }
                break;
              default:
                setRainData(Data.ankara2020);
                setLightningData(Data.ankara2020Yts);
                break;
            }
          }}
        >
          <option>İl Seçin</option>
          <option value="1">Ankara</option>
          <option value="2">İstanbul</option>
          <option value="3">İzmir</option>
        </Form.Select>
        <Form.Select
          aria-label="Tarih Seçin"
          className="ms-2 me-2 w-25"
          defaultValue={selectedYear}
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(Number(e.target.value));

            switch (Number(e.target.value)) {
              case 1:
                if (selectedCity === 1) {
                  setLightningData(Data.ankara2020Yts);
                  setRainData(Data.ankara2020);
                } else if (selectedCity === 2) {
                  setLightningData(Data.istanbul2020Yts);
                  setRainData(Data.istanbul2020);
                } else if (selectedCity === 3) {
                  setLightningData(Data.izmir2020Yts);
                  setRainData(Data.izmir2020);
                }
                break;
              case 2:
                if (selectedCity === 1) {
                  setLightningData(Data.ankara2021Yts);
                  setRainData(Data.ankara2021);
                } else if (selectedCity === 2) {
                  setRainData(Data.istanbul2021);
                  setLightningData(Data.istanbul2021Yts);
                } else if (selectedCity === 3) {
                  setLightningData(Data.izmir2021Yts);
                  setRainData(Data.izmir2021);
                }
                break;
              case 3:
                if (selectedCity === 1) {
                  setLightningData(Data.ankara2022Yts);
                  setRainData(Data.ankara2022);
                } else if (selectedCity === 2) {
                  setRainData(Data.istanbul2022);
                  setLightningData(Data.istanbul2022Yts);
                } else if (selectedCity === 3) {
                  setLightningData(Data.izmir2022Yts);
                  setRainData(Data.izmir2022);
                }
                break;
              default:
                setLightningData(Data.ankara2020Yts);
                setRainData(Data.ankara2020);
                break;
            }
          }}
        >
          <option>Tarih Seçin</option>
          <option value="1">2020</option>
          <option value="2">2021</option>
          <option value="3">2022</option>
        </Form.Select>
      </Form.Group>
      <Chart options={options} data={data} />
    </>
  );
};

export default MyChart;
