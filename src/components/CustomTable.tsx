"use client";

import { Props } from "@/interfaces/Interfaces";
import { Card, Table } from "react-bootstrap";
import { checkCorrelationStatus, numberToDate } from "@/utils/Utils";
import { useEffect, useState } from "react";

// Define the input props for the CustomTable component
type PropsIn = {
  stationData: Props;
};

// CustomTable Component: Displays weather data and calculates correlation
const CustomTable = ({ stationData }: PropsIn) => {
  // State variables for correlation and related data
  const [r, setR] = useState<number>(0);
  const [n, setN] = useState<number>(0);
  const [correlationStatus, setCorrelationStatus] = useState<string>("");

  // Function to count the number of lightning occurrences at a specific hour
  const countLighting = (date: number): number => {
    const customDate = numberToDate(date);

    const filteredList = stationData.lighting.filter((i) => {
      const itemDate = new Date(i.DATATARIH);
      const itemHour = itemDate.getHours();
      return itemHour === new Date(customDate).getHours();
    });

    return filteredList.length;
  };

  // Group rain data by hour
  const groupedRainData = stationData.rain.reduce((result, data) => {
    // Extract the hour from the data
    const hour = data.SAAT;
    // Accumulate total rain for each hour
    result[hour] = (result[hour] || 0) + data.TOPLAM_YAGIS;
    return result;
  }, {});

  // Group lightning data by hour
  const groupedLightningData = stationData.lighting.reduce((result, data) => {
    // Extract the hour from the data
    const date = new Date(data.DATATARIH);
    const hour = date.getHours();
    // Count occurrences of lightning for each hour
    result[hour] = (result[hour] || 0) + 1;
    return result;
  }, {});

  // Combine grouped rain and lightning data and filter non-zero values
  const correlationData = Object.keys(groupedRainData)
    .map((hour) => {
      // Combine rain and lightning data for each hour
      return {
        hour: parseInt(hour),
        rain: groupedRainData[hour] || 0,
        lightning: groupedLightningData[hour] || 0,
      };
    })
    // Filter out hours with no rain or lightning
    .filter((i) => i.rain > 0 || i.lightning > 0);

  // Function to calculate Pearson correlation coefficient
  const calculateCorrelation = (data: any) => {
    // Total number of data points
    const n = data.length;
    setN(n);

    // Calculate mean values for rain and lightning
    const meanRain = data.reduce((sum, item) => sum + item.rain, 0) / n;
    const meanLightning =
      data.reduce((sum, item) => sum + item.lightning, 0) / n;

    // Initialize variables for correlation calculation
    let numerator = 0;
    let denominatorRain = 0;
    let denominatorLightning = 0;

    // Iterate through the data to calculate correlation components
    for (let i = 0; i < n; i++) {
      const rainDeviation = data[i].rain - meanRain;
      const lightningDeviation = data[i].lightning - meanLightning;

      numerator += rainDeviation * lightningDeviation;
      denominatorRain += Math.pow(rainDeviation, 2);
      denominatorLightning += Math.pow(lightningDeviation, 2);
    }

    // Calculate Pearson correlation coefficient
    const correlation =
      numerator / Math.sqrt(denominatorRain * denominatorLightning);

    // Calculate degrees of freedom for t-distribution
    const degreesOfFreedom = n - 2;

    // Calculate t statistic for two-tailed test
    const tStatistic =
      correlation *
      Math.sqrt(degreesOfFreedom / (1 - Math.pow(correlation, 2)));

    // Set state variables and update correlation status
    setR(correlation);
    setCorrelationStatus(checkCorrelationStatus(correlation));

    return correlation;
  };

  // Effect to recalculate correlation when stationData changes
  useEffect(() => {
    calculateCorrelation(correlationData);
  }, [stationData]);

  // TSX for rendering the CustomTable component
  return (
    <div className="container mt-5 d-flex">
      <Card className="w-100">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>{`${stationData.city}-${stationData.station} - ${stationData.no}`}</Card.Title>
              <Card.Text>{stationData.date}</Card.Text>
              <Card.Text>{`Lat: ${stationData.latitude} Lon: ${stationData.longitude}`}</Card.Text>
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
              <Card.Title>Korelasyon Sonuçları</Card.Title>
              <Card.Text>
                {`Pearson Korelasyon Katsayısı(r) : ${r.toFixed(3)}`}
              </Card.Text>
              <Card.Text>{`Değer Sayısı: ${n}`}</Card.Text>
              <Card.Text>{`Sonuç: ${correlationStatus}`}</Card.Text>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Table
            striped
            bordered
            hover
            size="sm"
            variant="light"
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
    </div>
  );
};

export default CustomTable;
