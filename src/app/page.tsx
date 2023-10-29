import MyChart from "@/components/MyChart";
import Data from "@/resources/Data";
import { LatLon, dateToSeason } from "@/utils/Utils";

export default function Home() {
  return (
    <main>
      <div>
        <p className="mt-2">
          Yıldırım Aktivitesi ve Şiddetli Yağışlar Arasındaki İlişkinin Analizi
        </p>
        <MyChart />
      </div>
    </main>
  );
}
