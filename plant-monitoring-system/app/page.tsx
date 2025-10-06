"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null)
  const [height, setHeight] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const res = await fetch("http://localhost:5000/latest");
        const data = await res.json();
        console.log("Fetched plant data:", data);

        setImageUrl(data.image_url);
        setHeight(data.height_in?.toFixed(2));
      } catch (err) {
        console.error("Error fetching plant data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to HydroPheno Monitoring Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">System Overview</h2>
        <p className="text-gray-700">
HydroPheno is an AI-powered phenotyping system designed for hydroponically grown plants.
 It enables automated height measurement, disease detection, and growth analysis using computer vision and machine learning. 
 Our goal is to provide accurate, real-time insights into plant development in soilless environments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">System Status</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-lg mb-2">
            Latest Recorded Height:{" "}
            <span className="font-bold text-blue-600">
              {loading ? "Loading..." : height ? `${height} in` : "Not available"}
            </span>
          </p>
          <p className="text-lg mb-2">
            Last Analysis Time: <span className="font-bold">a few seconds ago</span>
          </p>
          <p className="text-lg">
            System Status: <span className="font-bold text-green-500">Operational</span>
          </p>
        </div>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Phenotyping Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Average Plant Height</h3>
            <p className="text-3xl font-bold text-blue-500">24.5 cm</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2"> Diseases Detected</h3>
            <p className="text-3xl font-bold text-red-500">3</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Growth Trend</h3>
            <p className="text-3xl font-bold text-green-500">+2.1%</p>
          </div>
        </div>
      </section>


      {/* 🔗 Drive Link Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Image Upload</h2>
        <div className="bg-white shadow rounded-lg p-6">
          {loading ? (
            <p>Loading image Url...</p>
          ) : imageUrl ? (
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-words"
            >
              {imageUrl}
            </a>
          ) : (
            <p className="text-red-500">No image available at this moment</p>
          )}
        </div>
      </section>

      <div className="mt-8">
        <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Open Full Dashboard
        </Link>
      </div>
    </div>
  )
}
