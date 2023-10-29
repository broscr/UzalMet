"use client";

import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Data from "@/resources/Data";
import SeasonChart from "./SeasonChart";
import { LatLon, dateToSeason } from "@/utils/Utils";

enum City {
  ANKARA = "Ankara",
  ISTANBUL = "İstanbul",
  IZMIR = "İzmir",
}

enum Year {
  IKIBINYIRMI = 2020,
  IKIBINYIRMIBIR = 2021,
  IKIBINYIRMIIKI = 2022,
}

const DataLayer = () => {
  const [selectedYear, setSelectedYear] = useState<Year>(Year.IKIBINYIRMI);
  const [selectedCity, setSelectedCity] = useState<City>(City.ANKARA);
  const [selectedData, setSelectedData] = useState(
    dateToSeason(LatLon.ankara, Data.ankara2020, Data.ankara2020Yts)
  );

  useEffect(() => {
    switch (selectedCity) {
      case City.ANKARA:
        if (selectedYear === Year.IKIBINYIRMI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.ankara2020, Data.ankara2020Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIBIR)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.ankara2021, Data.ankara2021Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIIKI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.ankara2022, Data.ankara2022Yts)
          );
        break;
      case City.ISTANBUL:
        if (selectedYear === Year.IKIBINYIRMI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.istanbul2020, Data.istanbul2020Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIBIR)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.istanbul2021, Data.istanbul2021Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIIKI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.istanbul2022, Data.istanbul2022Yts)
          );
        break;
      case City.IZMIR:
        if (selectedYear === Year.IKIBINYIRMI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.izmir2020, Data.izmir2020Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIBIR)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.izmir2021, Data.izmir2021Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIIKI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.izmir2022, Data.izmir2022Yts)
          );
        break;
      default:
      case City.ANKARA:
        if (selectedYear === Year.IKIBINYIRMI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.ankara2020, Data.ankara2020Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIBIR)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.ankara2021, Data.ankara2021Yts)
          );
        else if (selectedYear === Year.IKIBINYIRMIIKI)
          setSelectedData(
            dateToSeason(LatLon.ankara, Data.ankara2022, Data.ankara2022Yts)
          );
        break;
    }
  }, [selectedCity, selectedYear]);

  return (
    <>
      <Form.Group className="d-flex w-100 justify-content-center">
        <Form.Select
          aria-label="İl Seçin"
          className="ms-2 me-2 w-25"
          defaultValue={selectedCity}
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value as City);
          }}
        >
          <option>İl Seçin</option>
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
        </Form.Select>
        <Form.Select
          aria-label="Tarih Seçin"
          className="ms-2 me-2 w-25"
          defaultValue={selectedYear}
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(Number(e.target.value));
          }}
        >
          <option>Tarih Seçin</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </Form.Select>
      </Form.Group>
      <SeasonChart
        city={selectedCity}
        year={selectedYear}
        rainData={selectedData}
      />
    </>
  );
};

export default DataLayer;
