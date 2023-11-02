import DataLayer from "@/components/DataLayer";
/**
 * Home component represents the main page of the application.
 * It includes the DataLayer component for analyzing the relationship
 * between lightning activity and heavy rainfall.
 */
export default function Home() {
  return (
    <main>
      <div>
        <p className="mt-2">
          Yıldırım Aktivitesi ve Şiddetli Yağışlar Arasındaki İlişkinin Analizi
        </p>
        {/* Render the DataLayer component for analysis */}
        <DataLayer />
      </div>
    </main>
  );
}
