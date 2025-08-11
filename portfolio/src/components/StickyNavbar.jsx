// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            MyBrand
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-indigo-600 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
