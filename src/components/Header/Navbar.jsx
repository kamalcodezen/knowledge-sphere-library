import { useState } from "react";
import logo from "../../assets/main-logo.jpeg";
import "./Header.css";
import {
  FaBars,
  FaBell,
  FaBookOpen,
  FaChevronDown,
  FaClock,
  FaEnvelope,
  FaGift,
  FaHeart,
  FaPhoneAlt,
  FaSearch,
  FaTimes,
  FaTachometerAlt,
  FaTrophy,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const publicLinks = [
  { label: "Home", to: "/" },
  { label: "Books", to: "/books" },
  { label: "BookDetails", to: "/bookDetails" },
  { label: "Categories", to: "/categories" },
  { label: "Donor Leaderboard", to: "/donors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const accountLinks = [
  { label: "Login / Register", href: "/login", icon: FaUserCircle },
  { label: "User Dashboard", href: "/dashboard", icon: FaTachometerAlt },
  { label: "Borrowed Books", href: "/borrowed", icon: FaBookOpen },
  { label: "Wishlist", href: "/wishlist", icon: FaHeart },
  { label: "Notifications", href: "/notifications", icon: FaBell },
  { label: "Admin Panel", href: "/admin", icon: FaTachometerAlt },
];

const containerClass = "container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" ">
      <nav className="">
        {/* Top Green Strip */}
        <div className="hidden  bg-[#0f6b34] text-white md:flex ">
          <div
            className={`${containerClass} flex items-center justify-between  text-xs font-medium `}
          >
            <div className="flex items-center gap-6">
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-2 hover:text-emerald-100"
              >
                <FaPhoneAlt className="h-3 w-3" /> +880 1700-000000
              </a>
              <a
                href="mailto:info@jnanmonipathagar.com"
                className="flex items-center gap-2 hover:text-emerald-100"
              >
                <FaEnvelope className="h-3 w-3" /> info@bhairabpathagar.com
              </a>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <FaClock className="h-3 w-3" /> Open: Sat-Thu, 9:00 AM - 8:00 PM
              </span>
              <a
                href="/donors"
                className="flex items-center gap-2 hover:text-emerald-100"
              >
                <FaTrophy className="h-3 w-3" /> Top Donors
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Area */}
        <div className="w-full ">
          <div
            className={`${containerClass} flex items-center justify-between gap-4 py-1`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-3  ml-3">
              <span className="flex h-20 w-40 items-center justify-center  bg-clip-text bg-transparent">
                <img src={logo} alt="Logo" className="h-full w-full " />
              </span>
              <span className="hidden flex-col sm:flex">
                <span className="font-bold text-2xl text-[#0f6b34] leading-tight">
                  Bhairab Pathagar
                </span>
                {/* <span className="text-xs font-medium text-gray-500">
                  Knowledge Sphere Library
                </span> */}
              </span>
            </a>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <form className="flex h-10 w-64 overflow-hidden rounded-md border border-emerald-100 focus-within:border-emerald-600">
                <input
                  type="search"
                  placeholder="Search books"
                  className="flex-1 px-3 text-sm outline-none"
                />
                <button className="bg-[#15803d] px-4 text-white hover:bg-[#0f6b34]">
                  <FaSearch className="w-10" />
                </button>
              </form>

              <a
                href="/wishlist"
                className="relative flex h-10 w-10 items-center justify-center rounded-md border border-emerald-100 text-[#15803d] hover:bg-emerald-50"
              >
                <FaHeart />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  2
                </span>
              </a>

              <a
                href="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-md border border-emerald-100 text-[#15803d] hover:bg-emerald-50"
              >
                <FaShoppingCart />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  3
                </span>
              </a>

              <div className="group relative">
                <button className="flex  h-10  items-center gap-2 rounded-md text-sm font-semibold text-gray-600 hover:text-emerald-700 transition ">
                  Account <FaChevronDown className="h-3 w-4 transition " />
                </button>
                <ul className="invisible absolute right-0 top-full z-50 mt-2 w-56 rounded-md border bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {accountLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        <link.icon className="text-emerald-600" /> {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="/donate"
                className="flex h-10 items-center gap-3 rounded-md text-[#15803d] px-7 text-lg font-bold sm:flex"
              >
                <FaGift /> <span className="hidden sm:inline">Donate</span>
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" text-emerald-700 border border-emerald-100 rounded-md"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Sub Navigation (Desktop) */}
        <div className="hidden lg:block bg-[#f4faf4] backdrop-blur-md border-t border-emerald-100 shadow-sm">
          <div
            className={`${containerClass} flex items-center justify-center gap-6 py-3`}
          >
            {publicLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 
          ${
            isActive
              ? "text-white bg-gradient-to-r from-green-600 to-emerald-400 shadow-md"
              : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-400 hover:shadow-md"
          }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-emerald-100">
            <div className={`${containerClass} py-4 flex flex-col gap-2`}>
              {publicLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 text-sm font-bold text-gray-700 hover:bg-emerald-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2" />
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/login"
                  className="flex items-center justify-center gap-2 bg-[#15803d] py-3 h-8 text-white rounded-md font-bold text-sm"
                >
                  <FaUserCircle /> Login
                </a>
                <a
                  href="/dashboard"
                  className="flex items-center justify-center gap-2 border border-emerald-200 py-3 text-emerald-800 rounded-md font-bold text-sm"
                >
                  <FaTachometerAlt /> Dashboard
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
