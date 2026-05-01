// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { MdMenuBook } from "react-icons/md";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const activeClass = (path) =>
//     location.pathname === path
//       ? "border-b-2 border-purple-500 text-purple-400 pb-1"
//       : "pb-1";

//   return (
//     <div className="bg-[#0f172a] sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
//         {/* Logo */}
//         <h1 className="text-xl font-bold flex items-center gap-2">
//           <MdMenuBook className="text-2xl text-purple-600" />
//           <span className="text-blue-500">Book</span> Nest
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6">
//           <Link to="/" className={activeClass("/")}>
//             Home
//           </Link>
//           <Link to="/books" className={activeClass("/books")}>
//             All Books
//           </Link>
//           <Link to="/profile" className={activeClass("/profile")}>
//             My Profile
//           </Link>
//         </div>

//         {/* Desktop Button */}
//         <Link
//           to="/login"
//           className="hidden md:block bg-purple-700 hover:bg-purple-800 px-5 py-2 rounded-md"
//         >
//           Login
//         </Link>

//         {/* Mobile Menu */}
//         <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
//           <HiMenu />
//         </button>
//       </div>

//       {/* Overlay */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/40 z-40"
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#1e293b] z-50 transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center px-6 py-4 text-white border-b border-gray-700">
//           <h1 className="text-lg font-bold flex items-center gap-2">
//             <MdMenuBook className="text-xl text-purple-500" />
//             <span className="text-blue-400">Book</span> Nest
//           </h1>

//           <button onClick={() => setOpen(false)} className="text-2xl">
//             <HiX />
//           </button>
//         </div>

//         {/* Links */}
//         <div className="px-6 py-6 space-y-5 text-white">
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             className={`block ${activeClass("/")}`}
//           >
//             Home
//           </Link>

//           <Link
//             to="/books"
//             onClick={() => setOpen(false)}
//             className={`block ${activeClass("/books")}`}
//           >
//             All Books
//           </Link>

//           <Link
//             to="/profile"
//             onClick={() => setOpen(false)}
//             className={`block ${activeClass("/profile")}`}
//           >
//             My Profile
//           </Link>

//           <div className="pt-6 space-y-3">
//             <Link
//               to="/login"
//               onClick={() => setOpen(false)}
//               className="block bg-purple-700 text-center py-2 rounded-md"
//             >
//               Login
//             </Link>

//             <Link
//               to="/register"
//               onClick={() => setOpen(false)}
//               className="block border border-purple-500 text-center py-2 rounded-md"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


