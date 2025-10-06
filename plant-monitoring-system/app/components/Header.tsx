import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-lg font-semibold text-gray-800">
              Plant Monitoring System
            </Link>
          </li>
          <li>
            <Link href="/settings" className="text-gray-600 hover:text-gray-800">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

