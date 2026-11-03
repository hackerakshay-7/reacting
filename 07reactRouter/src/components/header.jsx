import { Link, NavLink } from 'react-router-dom'

const navClass = ({ isActive }) =>
  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 hover:text-orange-700 ${isActive ? 'text-orange-700' : 'text-gray-700'}`

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/about" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">
              About
            </Link>
          </div>

          <div className="w-full lg:w-auto">
            <ul className="flex flex-wrap items-center gap-6 py-3 font-medium">
              <li><NavLink to="/" end className={navClass}>Home</NavLink></li>
              <li><NavLink to="/about" className={navClass}>About</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
