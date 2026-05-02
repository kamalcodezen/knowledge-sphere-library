import { FaHeart, FaBookOpen, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div className="group relative rounded-2xl bg-white/80 backdrop-blur border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1">
      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-red-50 text-gray-600 hover:text-red-500 transition">
        <FaHeart size={14} />
      </button>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={book.imgUrl}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 text-[10px] px-3 py-1 rounded-full font-semibold tracking-wide shadow-md 
          ${
            book.availableCopies > 0
              ? "bg-emerald-600 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {book.availableCopies > 0 ? "AVAILABLE" : "OUT"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-md font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-emerald-600 transition">
          {book.title}
        </h2>

        {/* Author */}
        <p className="text-xs text-gray-500">by {book.authorName}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-400 ml-1">(5.0)</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-2"></div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          {/* Copies */}
          <span className="text-xs font-medium text-gray-600">
            {book.availableCopies} copies
          </span>

          {/* Button */}
          <Link
            to={`/bookDetails/${book.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-green-600 to-emerald-400 text-white px-3 py-1.5 rounded-lg shadow hover:scale-105 hover:shadow-md transition"
          >
            <FaBookOpen /> View
          </Link>
        </div>
      </div>

      {/* Hover Action Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur p-2 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-600 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition origin-left duration-500"></div>
    </div>
  );
};

export default Book;
