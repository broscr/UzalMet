export interface IRain {
  TOPLAM_YAGIS: number;
  YIL: number;
  AY: number;
  GUN: number;
  SAAT: number;
  DATATARIH: number;
  ISTNO: number;
}

export interface ILighting {
  PIKAKIM: number;
  FLASHTIP: number;
  SENSORSAYISI: number;
  DATATARIH: string;
  LIGHTENLEM: number;
  LIGHTBOYLAM: number;
}

export type Props = {
  rain: IRain[];
  lighting: ILighting[];
  latitude: number;
  longitude: number;
  station: string;
  city: string;
  date: string;
  no: number;
};
