"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Plant A", height: 20 },
  { name: "Plant B", height: 25 },
  { name: "Plant C", height: 18 },
  { name: "Plant D", height: 22 },
  { name: "Plant E", height: 30 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Plant Health Summary</h2>
          <div className="flex justify-around">
            <div className="text-center">
              <div className="inline-block w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <span>Healthy: 80%</span>
            </div>
            <div className="text-center">
              <div className="inline-block w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
              <span>Stressed: 15%</span>
            </div>
            <div className="text-center">
              <div className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              <span>Diseased: 5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Height Tracking</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="height" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Growth Insights</h2>
          <p>AI analysis shows an average growth rate of 2.3 cm per week across all monitored plants.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Recent Anomalies</h2>
          <ul className="list-disc pl-5">
            <li>Possible leaf spot detected on Plant C</li>
            <li>Unusual growth pattern observed in Plant E</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

