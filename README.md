### UZALMET 2023 Yıldırım Aktivitesi ve Şiddetli Yağışlar Arasındaki İlişkinin Analizi (UZALMET 2023 Lightning Activity and Heavy Rainfall Relationship Analysis)

ULUSLARARASI KATILIM (INTERNATIONAL PARTICIPATION)

V. METEOROLOJİ UZAKTAN ALGILAMA SEMPOZYUMU (V. REMOTE SENSING IN METEOROLOGY SYMPOSIUM)

14-17 Kasım 2023 (November 14-17, 2023)

---

**Türkçe:**

Bu çalışma, yıldırım aktivitesi ile şiddetli yağışlar arasındaki ilişkiyi anlamak ve bu bilgiyi afet yönetimi ve iklim değişikliği ile mücadelede kullanmak amacını taşımaktadır.

YÖNTEM

Veri Toplama

- Veri kaynağı olarak, Türkiye genelinde bulunan 10 adet Meteoroloji İstasyonu baz alınmıştır. 
- Otomatik Meteorolojik Gözlem İstasyonu (OMGİ) aracılığı ile yağış verileri, Yıldırım Tespit ve Takip Sistemi (YTTS) aracılığıyla istasyonların, 15 km yarıçaplı bir daire içinde gerçekleşen yıldırım verileri toplanmıştır.
- Bu veriler, 2019 ile 2022 yılları arasında Mayıs - Ağustos ayları süresince yoğun yıldırım aktivitesinin yaşandığı dönemleri kapsamaktadır.
- Meteorolojik hadiselerin şiddet sınıflandırmasına göre, bir yağışın 'şiddetli yağış' olarak kabul edilmesi için 12 saatlik periyotta 76-100 mm arasında bir yağış miktarına ulaşması gerekmektedir. Bu nedenle, çalışmamızda verilerimiz, 24 saatlik yağış verisinin, 12 saatlik periyodunda şiddetli yağış alan günler olarak değerlendirilmiştir.
---

Veri Entegrasyonu

Meteoroloji istasyonlarından elde edilen saatlik yağış verileri, Yıldırım Tespit ve Takip Sistemi (YTTS) verileriyle coğrafi konumlarına göre eşleştirilerek analiz için uygun hale getirilmiştir. Bu veriler .json ve .csv formatlarına dönüştürülerek, SPSS uygulamasında kullanılmak üzere düzenlenmiştir. SPSS (Statistical Package for the Social Sciences), araştırmacıların verileri analiz etmelerine, istatistiksel sonuçlar üretmelerine ve grafikler oluşturmalarına yardımcı olan güçlü bir istatistiksel analiz yazılımıdır.

Veri analizi aşamasında, iki veya daha fazla değişken arasındaki ilişkiyi ölçen bir istatistiksel yöntem olan Korelasyon Analizi kullanılmıştır. Korelasyon, değişkenler arasındaki ilişkinin gücünü ve yönünü ölçmek için kullanılır. En yaygın korelasyon  yöntemleri: Pearson ve Spearman Korelasyonudur. 

Çalışmada, Pearson Korelasyon Analizi tercih edilmiş olup, incelenen tüm istasyonlar için ayrı ayrı bu hesaplamalar yapılmıştır.

Bu çalışma, 10 farklı insansız ölçüm yapan meteoroloji istasyonunda yıldırım aktivitesi ve şiddetli yağışlar arasındaki korelasyonu incelemiştir. Elde edilen sonuçlar, bu iki değişken arasında önemli ölçüde pozitif ilişki olduğunu göstermektedir. Özellikle, Çekmeköy/Ömerli, Sarıçam ve Çayeli oldukça yüksek korelasyon katsayılarına sahiptir.
Bu sonuçlar, meteorolojik olayların anlaşılması ve tahmin edilmesi açısından önemlidir. Şiddetli yağışlar, yıldırım aktivitesi ile ilişkilendirilerek daha iyi izlenebilir ve anlaşılabilir. Ayrıca, bu sonuçlar, afet yönetimi ve halkın uyarılması için kullanılabilir.

---

**English**

This study aims to understand the relationship between lightning activity and heavy rainfall and use this information in disaster management and climate change mitigation.

METHOD

Data Collection

As the data source, 10 Meteorology Stations across Turkey have been considered.
Rainfall data through Automatic Meteorological Observation Stations (OMGİ) and lightning data within a 15 km radius circle through the Lightning Detection and Tracking System (YTTS) at the stations were collected.
These data cover periods of intense lightning activity from May to August between 2019 and 2022.
Based on the intensity classification of meteorological events, for a rainfall to be considered 'heavy rain,' it needs to reach a rainfall amount between 76-100 mm in a 12-hour period. Therefore, our data in this study are evaluated as days with heavy rainfall in a 12-hour period based on 24-hour rainfall data.

Data Integration

Hourly rainfall data obtained from meteorological stations were matched with Lightning Detection and Tracking System (YTTS) data based on their geographical locations and prepared for analysis. These data were transformed into .json and .csv formats for use in the SPSS application. SPSS (Statistical Package for the Social Sciences) is a powerful statistical analysis software that helps researchers analyze data, produce statistical results, and create graphs.

In the data analysis stage, Correlation Analysis, a statistical method measuring the relationship between two or more variables, was used. Correlation is used to measure the strength and direction of the relationship between variables. The most common correlation methods are Pearson and Spearman Correlation.

In this study, Pearson Correlation Analysis was preferred, and these calculations were made separately for all the stations under investigation.

This study examined the correlation between lightning activity and heavy rainfall in 10 different unmanned measurement meteorology stations. The results obtained show a significant positive relationship between these two variables. In particular, Çekmeköy/Ömerli, Sarıçam, and Çayeli have very high correlation coefficients.
These results are crucial for understanding and predicting meteorological events. Heavy rainfall can be better monitored and understood when correlated with lightning activity. Additionally, these results can be used for disaster management and public warning.


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
