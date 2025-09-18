import React, { useEffect, useState } from "react";

// Define the TypeScript interface to match your C# model
interface Henkilo {
  nimi: string;
  osoite: string;
  maa: string;
}

const HenkiloTable: React.FC = () => {
  const [henkilot, setHenkilot] = useState<Henkilo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7124/api/v1/henkilöt");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Henkilo[] = await response.json();
        setHenkilot(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Henkilöt</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Nimi</th>
            <th className="border border-gray-300 px-4 py-2">Osoite</th>
            <th className="border border-gray-300 px-4 py-2">Maa</th>
          </tr>
        </thead>
        <tbody>
          {henkilot.map((h, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{h.nimi}</td>
              <td className="border border-gray-300 px-4 py-2">{h.osoite}</td>
              <td className="border border-gray-300 px-4 py-2">{h.maa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HenkiloTable;
