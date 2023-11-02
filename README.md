### UZALMET 2023 Lightning Activity and Heavy Rainfall Relationship Analysis

**INTERNATIONAL PARTICIPATION**

**V. REMOTE SENSING IN METEOROLOGY SYMPOSIUM**

_November 14-17, 2023_

---

**Türkçe:**

2019 ile 2022 yılları arasında günlük yağış miktarı 76mm ve üzerinde olan istasyonlardan elde edilen saatlik veriler üzerinde gerçekleştirdiğimiz detaylı analizde, seçilen 10 istasyonun enlem ve boylam verileri belirlenmiş ve bu istasyonlardan alınan yağış verileri özel bir doğrulama sürecinden geçirilmiştir.

Belirlenen istasyonların coğrafi konumları temel alınarak, 15km yarıçap içinde yer alan Yıldırım Takip Sistemi'nden elde edilen veriler indirilmiş, ardından bu veriler istasyonların konumlarına göre düzenlenmiştir. Elde edilen veri seti, json ve csv formatlarına dönüştürülerek, bu verilerin web sayfasında ve SPSS uygulamasında etkili bir şekilde kullanılabilmesi sağlanmıştır.

**English:**

In the detailed analysis conducted on hourly data obtained from stations with daily rainfall amounts of 76mm and above between 2019 and 2022, latitude and longitude data of selected 10 stations were determined, and the rainfall data obtained from these stations were subjected to a special verification process.

Based on the geographical locations of the determined stations, data obtained from the Lightning Tracking System within a 15km radius were downloaded, and then these data were organized according to the locations of the stations. The resulting data set was converted to json and csv formats, ensuring effective use of these data on the website and in the SPSS application.

```yml
| stationNo |   stationName   |  stationCity  |    date    |  latitude   | longitude  | totalRain | totalLighting |
|-----------|-----------------|---------------|------------|-------------|------------|-----------|---------------|
|   18860   |      SARIÇAM      |     Adana     | 2020-05-01 |   36.7687   |  35.7903   |   112.2   |      188      |
|   18862   | Pozantı/Akçatekir|     Adana     | 2021-06-01 |   37.3269   |  34.7956   |   120.0   |      184      |
|   17979   |    Yumurtalık    |     Adana     | 2020-05-02 |   36.9681   |  35.5831   |   157.8   |      151      |
|   18233   |      Çanakçı      |    Giresun    | 2020-07-08 |   40.9272   |  39.00768  |   158.2   |      344      |
|   18529   |      İkizce       |      Ordu     | 2019-06-21 |   41.0528   |  37.0039   |   216.4   |      459      |
|   18529   |      İkizce       |      Ordu     | 2022-06-13 |   41.0528   |  37.0039   |   175.3   |      373      |
|   18905   |      Çayeli       |      Rize     | 2020-07-13 |   41.0408   |  40.7669   |   261.8   |      115      |
|   18905   |      Çayeli       |      Rize     | 2021-07-14 |   41.0408   |  40.7669   |   199.3   |       56      |
|   18397   | Çekmeköy/Ömerli  |    İstanbul   | 2022-08-15 |   41.0783   |  29.3256   |   105.2   |     1169      |
|   18980   |      Sarıyer      |    İstanbul   | 2022-07-10 | 41.099909   | 29.025127  |   153.8   |     2104      |
```

---

### Authors

- Rıdvan AKTEPE
- Zikri ÖZTAŞ

## Getting Started

First, run the development server:

```bash
npm install

npm run dev
```
