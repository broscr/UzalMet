import Adana2020_17979_Rain from "@/resources/adana/2020Saatlik.json";
import Adana2020_17979_Yts from "@/resources/adana/2020Yts.json";
import Adana2021_18862_Rain from "@/resources/adana/2021Saatlik.json";
import Adana2021_18862_Yts from "@/resources/adana/2021Yts.json";
import Adana2020_18860_Rain from "@/resources/adana/2020Saatlik_18860.json";
import Adana2020_18860_Yts from "@/resources/adana/2020Yts_18860.json";
import Istanbul2022_18397_Rain from "@/resources/istanbul/Saatlik_2022_18397.json";
import Istanbul2022_18397_Yts from "@/resources/istanbul//Yts_2022_18397.json";
import Istanbul2022_18980_Rain from "@/resources/istanbul/Saatlik_2022_18980.json";
import Istanbul2022_18980_Yts from "@/resources/istanbul/Yts_2022_18980.json";
import Ordu2022_18529_Rain from "@/resources/ordu/2022Saatlik.json";
import Ordu2022_18529_Yts from "@/resources/ordu/2022Yts.json";
import Ordu2019_18529_Rain from "@/resources/ordu/2019Saatlik.json";
import Ordu2019_18529_Yts from "@/resources/ordu/2019Yts.json";
import Rize2021_18905_Rain from "@/resources/rize/Saatlik_2021.json";
import Rize2021_18905_Yts from "@/resources/rize/Yts_20221.json";
import Rize2020_18905_Rain from "@/resources/rize/Saatlik_2020.json";
import Rize2020_18905_Yts from "@/resources/rize/Yts_2020.json";
import Giresun2020_18223_Rain from "@/resources/giresun/Saatlik_2020.json";
import Giresun2020_18223_Yts from "@/resources/giresun/Yts_2020.json";

const Data = {
  adanaA: {
    _2021: {
      rain: Adana2021_18862_Rain,
      lighting: Adana2021_18862_Yts,
      latitude: 37.3269,
      longitude: 34.7956,
      station: "Pozantı/Akçatekir",
      city: "Adana",
      date: "2021-06-01",
      no: 18862,
    },
  },
  adanaB: {
    _2020: {
      rain: Adana2020_17979_Rain,
      lighting: Adana2020_17979_Yts,
      latitude: 36.9681,
      longitude: 35.5831,
      station: "Yumurtalık",
      city: "Adana",
      date: "2020-05-02",
      no: 17979,
    },
  },
  adanaC: {
    _2020: {
      rain: Adana2020_18860_Rain,
      lighting: Adana2020_18860_Yts,
      latitude: 36.7687,
      longitude: 35.7903,
      station: "SARIÇAM",
      city: "Adana",
      date: "2020-05-01",
      no: 18860,
    },
  },
  istanbulA: {
    _2022: {
      rain: Istanbul2022_18397_Rain,
      lighting: Istanbul2022_18397_Yts,
      latitude: 41.0783,
      longitude: 29.3256,
      station: "Çekmeköy/Ömerli",
      city: "İstanbul",
      date: "2022-08-15",
      no: 18397,
    },
  },
  istanbulB: {
    _2022: {
      rain: Istanbul2022_18980_Rain,
      lighting: Istanbul2022_18980_Yts,
      latitude: 41.099909,
      longitude: 29.025127,
      station: "Sarıyer",
      city: "İstanbul",
      date: "2022-07-10",
      no: 18980,
    },
  },
  orduA: {
    _2022: {
      rain: Ordu2022_18529_Rain,
      lighting: Ordu2022_18529_Yts,
      latitude: 41.0528,
      longitude: 37.0039,
      station: "İkizce",
      city: "Ordu",
      date: "2022-06-13",
      no: 18529,
    },
  },
  orduB: {
    _2019: {
      rain: Ordu2019_18529_Rain,
      lighting: Ordu2019_18529_Yts,
      latitude: 41.0528,
      longitude: 37.0039,
      station: "İkizce",
      city: "Ordu",
      date: "2019-06-20",
      no: 18529,
    },
  },
  rizeA: {
    _2021: {
      rain: Rize2021_18905_Rain,
      lighting: Rize2021_18905_Yts,
      latitude: 41.0408,
      longitude: 40.7669,
      station: "Çayeli",
      city: "Rize",
      date: "2021-07-14",
      no: 18905,
    },
  },
  rizeB: {
    _2020: {
      rain: Rize2020_18905_Rain,
      lighting: Rize2020_18905_Yts,
      latitude: 41.0408,
      longitude: 40.7669,
      station: "Çayeli",
      city: "Rize",
      date: "2020-07-13",
      no: 18905,
    },
  },
  giresunA: {
    _2020: {
      rain: Giresun2020_18223_Rain,
      lighting: Giresun2020_18223_Yts,
      latitude: 40.9272,
      longitude: 39.00768,
      station: "Çanakçı",
      city: "Giresun",
      date: "2020-07-8",
      no: 18233,
    },
  },
};

export default Data;
