"use client";

import DataUtils from "@/utils/DataUtils";
import SeasonChart from "./SeasonChart";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Props } from "@/interfaces/Interfaces";

// Define the Options type for the dropdown menu
type Options = {
  value: string;
  label: string;
};

/**
 * DataLayer component manages the selection of city data and renders the SeasonChart component.
 */
const DataLayer = () => {
  // Destructure city data from DataUtils
  const {
    adanaA,
    adanaB,
    adanaC,
    istanbulA,
    istanbulB,
    orduA,
    orduB,
    rizeA,
    rizeB,
    giresunA,
  } = DataUtils;

  // Options for the city dropdown menu
  const options = [
    { value: "istanbulA", label: "İstanbul-Çekmeköy 2022-08-15" },
    { value: "istanbulB", label: "İstanbul-Sarıyer 2022-07-10" },
    { value: "adanaA", label: "Adana-Pozantı 2021-06-01" },
    { value: "adanaB", label: "Adana-Yumartalık 2020-05-02" },
    { value: "adanaC", label: "Adana-Sarıçam 2020-05-01" },
    { value: "giresunA", label: "Giresun-Çanakçı 2020-07-08" },
    { value: "orduA", label: "Ordu-İkizce 2022-06-13" },
    { value: "orduB", label: "Ordu-İkizce 2019-06-21" },
    { value: "rizeA", label: "Rize-Çayeli 2021-07-14" },
    { value: "rizeB", label: "Rize-Çayeli 2020-07-13" },
  ];

  // State for selected dropdown option and city data
  const [selectedOptions, setSelectedOption] = useState<Options>(options[0]);
  const [selectedCity, setSelectedCity] = useState<Props>(istanbulA._2022);

  // useEffect to update selectedCity based on the selectedOptions
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
      case "adanaC":
        setSelectedCity(adanaC._2020);
        break;
      case "giresunA":
        setSelectedCity(giresunA._2020);
        break;
      case "orduA":
        setSelectedCity(orduA._2022);
        break;
      case "orduB":
        setSelectedCity(orduB._2019);
        break;
      case "rizeA":
        setSelectedCity(rizeA._2021);
        break;
      case "rizeB":
        setSelectedCity(rizeB._2020);
        break;
      default:
        setSelectedCity(istanbulA._2022);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  // Render the DataLayer component
  return (
    <>
      {/* Dropdown menu for selecting cities */}
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
      {/* Render the SeasonChart component with selected city data */}
      <SeasonChart stationData={selectedCity} />
    </>
  );
};

export default DataLayer;
