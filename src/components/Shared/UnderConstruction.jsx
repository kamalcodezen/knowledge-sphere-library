import { Link } from "react-router-dom";
import { FaWrench, FaArrowLeft } from "react-icons/fa";

const UnderConstruction = ({ title }) => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-3xl shadow-xl border border-emerald-50 p-8 md:p-12 max-w-md w-full text-center hover:shadow-2xl transition duration-300">
        
        {/* Wrench Icon */}
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-[#15803d] text-4xl mb-6 shadow-inner animate-pulse">
          <FaWrench />
        </div>

        {/* Badge */}
        <div className="mb-4">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Under Development
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight mb-3">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          We are currently building this section to provide you with the best library experience. Please check back soon!
        </p>

        {/* Back Link */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-450 hover:from-green-700 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-sm shadow hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
