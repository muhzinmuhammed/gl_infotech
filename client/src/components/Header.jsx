// components/Header.js
import Logo from '../assets/logo.png'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-lg font-bold">
        <img className="h-8 w-8" src={Logo} alt="Logo" />
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-700">Home</a></li>
          <li><a href="#" className="text-gray-700">About Us</a></li>
          <li><a href="#" className="text-gray-700">Products</a></li>
          <li><a href="#" className="text-gray-700">Services</a></li>
          <li><a href="#" className="text-gray-700">Projects</a></li>
          <li><a href="#" className="text-gray-700">Contact Us</a></li>
        </ul>
        <button className="md:hidden text-gray-700">Menu</button>
      </nav>
    </header>
  );
}

export default Header;
