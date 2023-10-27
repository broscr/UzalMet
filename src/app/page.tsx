import MyChart from "@/components/MyChart";

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
