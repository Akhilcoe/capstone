import Link from "next/link"
import { Home, BarChart2, Leaf, Settings, Info } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center space-x-2 px-4 py-3 rounded hover:bg-gray-700">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2 px-4 py-3 rounded hover:bg-gray-700">
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/plant-data" className="flex items-center space-x-2 px-4 py-3 rounded hover:bg-gray-700">
              <Leaf className="h-5 w-5" />
              <span>Plant Data & Reports</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center space-x-2 px-4 py-3 rounded hover:bg-gray-700">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center space-x-2 px-4 py-3 rounded hover:bg-gray-700">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

