import DataLayer from "@/components/DataLayer";
import Data from "@/utils/DataUtils";
import { writeFile } from "@/utils/ServerUtils";

export default function Home() {
  // writeFile(Data.orduB._2019);

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
