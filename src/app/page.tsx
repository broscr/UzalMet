import DataLayer from "@/components/DataLayer";

export default function Home() {
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
