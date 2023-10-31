"use client";

import DataUtils from "@/utils/DataUtils";
import SeasonChart from "./SeasonChart";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Props } from "@/interfaces/Interfaces";

type Options = {
  value: string;
  label: string;
};

const DataLayer = () => {
  const { adanaA, adanaB, istanbulA, istanbulB, orduA, orduB } = DataUtils;

  const options = [
    { value: "istanbulA", label: "İstanbul-Çekmeköy 2022-08-15" },
    { value: "istanbulB", label: "İstanbul-Sarıyer 2022-07-10" },
    { value: "adanaA", label: "Adana-Pozantı 2021-06-01" },
    { value: "adanaB", label: "Adana-Yumartalık 2020-05-02" },
    { value: "orduA", label: "Ordu-İkizce 2022-06-13" },
    { value: "orduB", label: "Ordu-İkizce 2019-06-21" },
  ];

  const [selectedOptions, setSelectedOption] = useState<Options>(options[0]);
  const [selectedCity, setSelectedCity] = useState<Props>(istanbulA._2022);

  useEffect(() => {
    switch (selectedOptions.value) {
      case "istanbulA":
        setSelectedCity(istanbulA._2022);
        break;
      case "istanbulB":
        setSelectedCity(istanbulB._2022);
        break;
      case "adanaA":
        setSelectedCity(adanaA._2021);
        break;
      case "adanaB":
        setSelectedCity(adanaB._2020);
        break;
      case "orduA":
        setSelectedCity(orduA._2022);
        break;
      case "orduB":
        setSelectedCity(orduB._2019);
        break;
      default:
        setSelectedCity(istanbulA._2022);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Select
          options={options}
          className="selectView"
          value={selectedOptions}
          onChange={setSelectedOption}
          isClearable={false}
          isSearchable={false}
        />
      </div>
      <SeasonChart stationData={selectedCity} />
    </>
  );
};

export default DataLayer;
