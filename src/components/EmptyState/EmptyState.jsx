import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-md w-full text-center border border-gray-100 animate-fadeIn">
        {/* Icon */}
        <div className="flex justify-center mb-6 text-yellow-500 text-6xl">
          <FaExclamationTriangle />
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold text-gray-800 tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-gray-700 mt-4">Page Not Found</h2>

        {/* Message */}
        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
          Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>

        {/* Home Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-700 to-emerald-600 hover:from-green-800 hover:to-emerald-700 text-white font-bold rounded-xl shadow-md hover:scale-[1.02] active:scale-95 transition cursor-pointer"
          >
            <FaHome /> Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
