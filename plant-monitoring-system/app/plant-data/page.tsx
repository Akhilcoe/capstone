import Link from "next/link"

const plants = [
  { id: 1, name: "Plant A", species: "Tomato", height: 20, health: "Healthy" },
  { id: 2, name: "Plant B", species: "Cucumber", height: 25, health: "Stressed" },
  { id: 3, name: "Plant C", species: "Pepper", height: 18, health: "Diseased" },
  { id: 4, name: "Plant D", species: "Lettuce", height: 22, health: "Healthy" },
  { id: 5, name: "Plant E", species: "Basil", height: 30, health: "Healthy" },
]

export default function PlantData() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Plant Data & Reports</h1>

      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Species</th>
              <th className="py-3 px-6 text-center">Height (cm)</th>
              <th className="py-3 px-6 text-center">Health Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {plants.map((plant) => (
              <tr key={plant.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{plant.name}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span>{plant.species}</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span>{plant.height}</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`${
                      plant.health === "Healthy"
                        ? "bg-green-200 text-green-600"
                        : plant.health === "Stressed"
                          ? "bg-yellow-200 text-yellow-600"
                          : "bg-red-200 text-red-600"
                    } py-1 px-3 rounded-full text-xs`}
                  >
                    {plant.health}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <Link href={`/plant-data/${plant.id}`} className="text-blue-600 hover:text-blue-900">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Download Report
        </button>
      </div>
    </div>
  )
}

