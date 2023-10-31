"use client";

import { Props } from "@/interfaces/Interfaces";
import { Card, Table } from "react-bootstrap";
import RainImg from "@/resources/yagis_siddeti.png";
import Image from "next/image";
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

  return (
    <div className="container mt-5">
      <Image
        src={RainImg}
        width={250}
        height={200}
        alt=""
        className="d-flex float-end"
      />
      <Card>
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
    </div>
  );
};

export default CustomTable;
