import { useState, useEffect, useRef } from "react";
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
import { NavLink, Link, useNavigate } from "react-router-dom";

const publicLinks = [
  { label: "Home", to: "/" },
  { label: "Books", to: "/books" },
  { label: "Categories", to: "/categories" },
  { label: "Donor Leaderboard", to: "/donors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const accountLinks = [
  { label: "Login / Register", href: "/login", icon: FaUserCircle },
  { label: "User Dashboard", href: "/dashboard", icon: FaTachometerAlt },
  { label: "Borrowed Books", href: "/books?cart=true", icon: FaBookOpen },
  { label: "Wishlist", href: "/books?wishlist=true", icon: FaHeart },
  { label: "Notifications", href: "/notifications", icon: FaBell },
  { label: "Admin Panel", href: "/admin", icon: FaTachometerAlt },
];

const containerClass = "container mx-auto";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Sync wishlist & cart counts with localStorage
  useEffect(() => {
    const updateCounts = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setWishlistCount(wishlist.length);
      setCartCount(cart.length);
    };

    updateCounts();

    window.addEventListener("wishlist-updated", updateCounts);
    window.addEventListener("cart-updated", updateCounts);

    return () => {
      window.removeEventListener("wishlist-updated", updateCounts);
      window.removeEventListener("cart-updated", updateCounts);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/books");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="">
        {/* Top Green Strip */}
        <div className="hidden bg-[#0f6b34] text-white md:flex py-1.5 border-b border-emerald-800">
          <div className={`${containerClass} flex items-center justify-between text-xs font-medium px-4`}>
            <div className="flex items-center gap-6">
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-2 hover:text-emerald-100 transition"
              >
                <FaPhoneAlt className="h-3 w-3" /> +880 1700-000000
              </a>
              <a
                href="mailto:info@jnanmonipathagar.com"
                className="flex items-center gap-2 hover:text-emerald-100 transition"
              >
                <FaEnvelope className="h-3 w-3" /> info@bhairabpathagar.com
              </a>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <FaClock className="h-3 w-3" /> Open: Sat-Thu, 9:00 AM - 8:00 PM
              </span>
              <Link
                to="/donors"
                className="flex items-center gap-2 hover:text-emerald-100 transition"
              >
                <FaTrophy className="h-3 w-3" /> Top Donors
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header Area */}
        <div className="w-full bg-white">
          <div className={`${containerClass} flex items-center justify-between gap-4 py-2 px-4`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-emerald-100 bg-white">
                <img src={logo} alt="Logo" className="h-full w-full object-cover" />
              </span>
              <span className="flex flex-col">
                <span className="font-bold text-xl text-[#0f6b34] leading-tight">
                  Bhairab Pathagar
                </span>
                <span className="text-[10px] font-medium text-emerald-600 tracking-wider uppercase">
                  Knowledge Sphere Library
                </span>
              </span>
            </Link>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              <form 
                onSubmit={handleSearchSubmit}
                className="flex h-10 w-72 overflow-hidden rounded-full border border-emerald-100 focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 transition"
              >
                <input
                  type="search"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 text-sm outline-none bg-gray-50/50"
                />
                <button 
                  type="submit"
                  className="bg-[#15803d] px-5 text-white hover:bg-[#0f6b34] transition flex items-center justify-center cursor-pointer"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </form>

              <Link
                to="/books?wishlist=true"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 text-[#15803d] hover:bg-emerald-50 hover:border-emerald-300 transition"
              >
                <FaHeart />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to="/books?cart=true"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 text-[#15803d] hover:bg-emerald-50 hover:border-emerald-300 transition"
              >
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="flex h-10 items-center gap-2 rounded-full border border-emerald-100 px-4 text-sm font-semibold text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/50 transition cursor-pointer"
                >
                  <FaUserCircle className="text-emerald-700 w-4 h-4" />
                  Account 
                  <FaChevronDown className={`h-3 w-3 text-gray-400 transition-transform duration-200 ${isAccountOpen ? "rotate-180" : ""}`} />
                </button>
                {isAccountOpen && (
                  <ul className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-gray-100 bg-white py-2 shadow-xl transition-all animate-fadeIn">
                    {accountLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.href}
                          onClick={() => setIsAccountOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                        >
                          <link.icon className="text-emerald-600 w-4 h-4" /> {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                to="/donors"
                className="flex items-center justify-center text-[#15803d] hover:text-emerald-800 transition"
              >
                <FaGift className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-emerald-700 border border-emerald-100 p-2 rounded-lg hover:bg-emerald-50 transition cursor-pointer"
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Sub Navigation (Desktop) */}
        <div className="hidden lg:block bg-[#f4faf4] border-t border-emerald-100">
          <div className={`${containerClass} flex items-center justify-center gap-2 py-2.5 px-4`}>
            {publicLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-sm"
                      : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
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
          <div className="lg:hidden bg-white border-t border-emerald-100 animate-slideDown">
            <div className={`${containerClass} py-4 px-4 flex flex-col gap-1`}>
              <form 
                onSubmit={handleSearchSubmit}
                className="flex h-10 w-full overflow-hidden rounded-lg border border-emerald-100 mb-3 focus-within:border-emerald-600 transition"
              >
                <input
                  type="search"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-3 text-sm outline-none bg-gray-50/50"
                />
                <button 
                  type="submit"
                  className="bg-[#15803d] px-4 text-white hover:bg-[#0f6b34] transition flex items-center justify-center"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </form>

              {publicLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="p-3 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-emerald-100" />
              <div className="grid grid-cols-2 gap-3 pb-2">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 bg-[#15803d] py-2.5 text-white rounded-lg font-semibold text-sm shadow hover:bg-emerald-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUserCircle /> Login
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-2 border border-emerald-200 py-2.5 text-emerald-800 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaTachometerAlt /> Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
