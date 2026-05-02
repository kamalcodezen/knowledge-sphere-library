import { Link } from "react-router-dom";
import { FaBookDead, FaArrowLeft } from "react-icons/fa";

const BookDetails = () => {
  return (
    <div className=" min-h-[400px] py-20 flex items-center justify-center bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4 text-red-500 text-5xl">
          <FaBookDead />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Book Not Found</h1>

        {/* Message */}
        <p className="text-gray-500 mt-2 text-sm">
          Sorry, the book you are looking for does not exist or has been removed
          from our library.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <Link
            to="/"
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-400 text-white rounded-md shadow hover:scale-105 transition"
          >
            Go Home
          </Link>

          <Link
            to="/books"
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition"
          >
            <FaArrowLeft /> Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
