"use client";

import { Props } from "@/interfaces/Interfaces";
import { Card, Table } from "react-bootstrap";
import RainImg from "@/resources/yagis_siddeti.png";
import Image from "next/image";
import CorTable from "@/resources/cor_table.png";
import { numberToDate } from "@/utils/Utils";

type PropsIn = {
  stationData: Props;
};

const CustomTable = ({ stationData }: PropsIn) => {
  const countLighting = (date: number): number => {
    const customDate = numberToDate(date);

    const filteredList = stationData.lighting.filter((i) => {
      const itemDate = new Date(i.DATATARIH);
      const itemHour = itemDate.getHours();
      return itemHour === new Date(customDate).getHours();
    });

    return filteredList.length;
  };

  const groupedRainData = stationData.rain.reduce((result, data) => {
    const hour = data.SAAT;
    result[hour] = (result[hour] || 0) + data.TOPLAM_YAGIS;
    return result;
  }, {});

  const groupedLightningData = stationData.lighting.reduce((result, data) => {
    const date = new Date(data.DATATARIH);
    const hour = date.getHours();
    result[hour] = (result[hour] || 0) + 1;
    return result;
  }, {});

  const correlationData = Object.keys(groupedRainData).map((hour) => {
    return {
      hour: parseInt(hour),
      rain: groupedRainData[hour],
      lightning: groupedLightningData[hour] || 0,
    };
  });

  const calculateCorrelation = (data: any) => {
    const n = data.length;

    // Toplam yağış ve yıldırım adetlerinin ortalamalarını hesapla
    const meanRain = data.reduce((sum, item) => sum + item.rain, 0) / n;
    const meanLightning =
      data.reduce((sum, item) => sum + item.lightning, 0) / n;

    // Pearson Korelasyon Katsayısı hesapla
    let numerator = 0;
    let denominatorRain = 0;
    let denominatorLightning = 0;

    for (let i = 0; i < n; i++) {
      const rainDeviation = data[i].rain - meanRain;
      const lightningDeviation = data[i].lightning - meanLightning;

      numerator += rainDeviation * lightningDeviation;
      denominatorRain += Math.pow(rainDeviation, 2);
      denominatorLightning += Math.pow(lightningDeviation, 2);
    }

    const correlation =
      numerator / Math.sqrt(denominatorRain * denominatorLightning);

    return correlation;
  };

  const correlation = calculateCorrelation(correlationData);

  return (
    <div className="container mt-5 d-flex">
      <Card className="w-100">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>{`${stationData.city}-${stationData.station} - ${stationData.no}`}</Card.Title>
              <Card.Text>
                {`Günlük Toplam Yağış:  ${stationData.rain
                  .reduce((total, rain) => total + rain.TOPLAM_YAGIS, 0)
                  .toFixed(2)}`}
              </Card.Text>
              <Card.Text>
                {`Günlük Yıldırım-Şimşek:  ${stationData.lighting.length}`}
              </Card.Text>
            </div>
            <div>
              <Card.Title>{stationData.date}</Card.Title>
              <Card.Text>{`Lat: ${stationData.latitude} Lon: ${stationData.longitude}`}</Card.Text>
              <Card.Title>
                {`Pearson Korelasyon Katsayısı : ${correlation.toFixed(4)}`}
              </Card.Title>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Table
            striped
            bordered
            hover
            size="sm"
            variant="dark"
            responsive
            className="text-center"
          >
            <thead>
              <tr>
                <th>Gün-Saat</th>
                <th>Yağış Miktarı</th>
                <th>Yıldırım Şimşek</th>
              </tr>
            </thead>
            <tbody>
              {stationData.rain.map((i) => (
                <tr key={i.DATATARIH}>
                  <td>{`${i.GUN}-${i.SAAT}`}</td>
                  <td>{i.TOPLAM_YAGIS}</td>
                  <td>{countLighting(i.DATATARIH)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <div className="">
        <Image src={RainImg} width={250} height={200} alt="" className="mb-5" />
        <Image src={CorTable} width={350} height={300} alt="" className="mb-5" />
      </div>
    </div>
  );
};

export default CustomTable;
