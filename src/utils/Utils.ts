import moment from "moment";

/**
 * Converts a numeric date to a formatted date string.
 * @param date - Numeric date in the format YYYYMMDDHH.
 * @returns Formatted date string in the format YYYY-MM-DD HH:mm.
 */
export const numberToDate = (date: number) => {
  const dateString = moment(date.toString(), "YYYYMMDDHH").format(
    "YYYY-MM-DD HH:mm"
  );
  return dateString;
};

/**
 * Converts a date string to a numeric date.
 * @param date - Date string to be converted.
 * @param format - Optional format string for parsing the input date.
 * @returns Numeric date in milliseconds since epoch.
 */
export const dateToNumber = (date: string, format?: string) => {
  // Format the input date string to YYYY-MM-DD HH format
  const dateString = moment(date, format).format("YYYY-MM-DD HH");

  // Convert the formatted date string to a numeric date in milliseconds
  const dateNumber = moment(dateString).toDate().getTime();

  return dateNumber;
};

/**
 * Determines the correlation status based on the correlation coefficient (r).
 * @param r - Correlation coefficient value.
 * @returns Correlation status as a descriptive string.
 */
export const checkCorrelationStatus = (r: number): string => {
  if (r > 0.9) {
    return "Çok Güçlü Pozitif";
  } else if (r > 0.7) {
    return "Güçlü Pozitif";
  } else if (r > 0.5) {
    return "Orta Şiddetli Pozitif";
  } else if (r > 0.3) {
    return "Zayıf Pozitif";
  } else if (r > 0) {
    return "İhmal Edilebilir veya Yok Pozitif";
  } else if (r > -0.3) {
    return "İhmal Edilebilir veya Yok Negatif";
  } else if (r > -0.5) {
    return "Zayıf Negatif";
  } else if (r > -0.7) {
    return "Orta Şiddetli Negatif";
  } else if (r > -0.9) {
    return "Güçlü Negatif";
  } else {
    return "Çok Güçlü Negatif";
  }
};
