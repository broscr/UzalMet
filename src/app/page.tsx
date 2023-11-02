import DataLayer from "@/components/DataLayer";
import Data from "@/utils/DataUtils";
import { writeFile, writeFileDaily } from "@/utils/ServerUtils";

export default function Home() {
  // writeFileDaily([
  //   Data.adanaA._2021,
  //   Data.adanaB._2020,
  //   Data.adanaC._2020,
  //   Data.istanbulA._2022,
  //   Data.istanbulB._2022,
  //   Data.orduA._2022,
  //   Data.orduB._2019,
  //   Data.rizeA._2021,
  //   Data.rizeB._2020,
  //   Data.giresunA._2020,
  // ]);

// writeFile(Data.adanaA._2021)
// writeFile(Data.adanaB._2020)
// writeFile(Data.adanaC._2020)
// writeFile(Data.giresunA._2020)
// writeFile(Data.istanbulA._2022)
// writeFile(Data.istanbulB._2022)
// writeFile(Data.orduA._2022)
// writeFile(Data.orduB._2019)
// writeFile(Data.rizeA._2021)
// writeFile(Data.rizeB._2020)

  return (
    <main>
      <div>
        <p className="mt-2">
          Yıldırım Aktivitesi ve Şiddetli Yağışlar Arasındaki İlişkinin Analizi
        </p>
        <DataLayer />
      </div>
    </main>
  );
}
