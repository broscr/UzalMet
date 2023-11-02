/**
 * Interface representing the structure of rain data.
 */
export interface IRain {
  TOPLAM_YAGIS: number;
  YIL: number;
  AY: number;
  GUN: number;
  SAAT: number;
  DATATARIH: number;
  ISTNO: number;
}

/**
 * Interface representing the structure of lighting data.
 */
export interface ILighting {
  PIKAKIM: number;
  FLASHTIP: number;
  SENSORSAYISI: number;
  DATATARIH: string;
  LIGHTENLEM: number;
  LIGHTBOYLAM: number;
}

/**
 * Type representing the properties used in your application.
 */
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
