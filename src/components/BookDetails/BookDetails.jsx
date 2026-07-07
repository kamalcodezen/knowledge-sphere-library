import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import mockBooks from "../../data/books.json";
import { FaArrowLeft, FaBookOpen, FaHeart, FaStar, FaBookmark, FaCalendarAlt, FaBuilding, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const BookDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === id);

  const [isBorrowed, setIsBorrowed] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return book ? cart.includes(book.id) : false;
  });
  const [inWishlist, setInWishlist] = useState(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    return book ? wishlist.includes(book.id) : false;
  });


  const handleWishlistToggle = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (wishlist.includes(book.id)) {
      wishlist = wishlist.filter((item) => item !== book.id);
      setInWishlist(false);
    } else {
      wishlist.push(book.id);
      setInWishlist(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlist-updated"));
  };

  const handleBorrow = () => {
    if (isBorrowed) return;
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!cart.includes(book.id)) {
      cart.push(book.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cart-updated"));
    }
    setIsBorrowed(true);
  };

  if (!book) {
    return (
      <div className="min-h-[70vh] py-20 flex items-center justify-center bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-100 animate-fadeIn">
          {/* Icon */}
          <div className="flex justify-center mb-5 text-red-500 text-6xl">
            <FaExclamationCircle />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">Book Not Found</h1>

          {/* Message */}
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            Sorry, the book you are looking for does not exist in our library database or might have been cataloged under a different identifier.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <Link
              to="/"
              className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-400 hover:from-green-700 hover:to-emerald-500 text-white rounded-xl shadow-md font-semibold text-sm hover:scale-[1.02] transition"
            >
              Go Home
            </Link>

            <Link
              to="/books"
              className="flex items-center gap-2 px-5 py-2.5 border border-emerald-200 text-emerald-800 rounded-xl hover:bg-emerald-50 font-semibold text-sm transition"
            >
              <FaArrowLeft /> Browse Books
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isAvailable = book.availableCopies > 0 && !isBorrowed;
  const copiesRemaining = isBorrowed ? book.availableCopies - 1 : book.availableCopies;



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Link */}
        <Link 
          to="/books" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-950 mb-8 hover:translate-x-[-4px] transition-transform duration-300"
        >
          <FaArrowLeft /> Back to Book Catalog
        </Link>

        {/* Main Details Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-50 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Book Cover (4 cols) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 w-64 md:w-full h-96 group">
                <img 
                  src={book.imgUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md tracking-wider uppercase ${
                    isAvailable ? "bg-emerald-600 text-white" : "bg-red-500 text-white"
                  }`}>
                    {isAvailable ? "Available" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>

            {/* Book Metadata & Description (8 cols) */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                  {book.title}
                </h1>
                
                {/* Author */}
                <p className="text-emerald-700 font-semibold text-base mt-2">
                  by {book.authorName}
                </p>

                {/* Rating & Category */}
                <div className="flex flex-wrap items-center gap-4 mt-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                    <span className="text-gray-500 font-semibold text-sm ml-1.5">({book.rating.toFixed(1)})</span>
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <FaBookmark className="w-3.5 h-3.5" /> {book.category}
                  </span>
                </div>

                {/* Specs Section */}
                <div className="grid grid-cols-2 gap-4 my-6 text-sm">
                  <div className="flex items-center gap-2.5 text-gray-600">
                    <FaBuilding className="text-emerald-600 w-4 h-4" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Publisher</p>
                      <p className="font-semibold text-gray-700">{book.publisher}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-600">
                    <FaCalendarAlt className="text-emerald-600 w-4 h-4" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Published</p>
                      <p className="font-semibold text-gray-700">{book.publishYear}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h3 className="text-gray-800 font-bold text-sm uppercase tracking-wider mb-2">Book Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {book.description}
                  </p>
                </div>
              </div>

              {/* Action and Alert Section */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                
                {/* Borrowed Success Notification */}
                {isBorrowed && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-fadeIn">
                    <FaCheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Borrow Request Confirmed!</p>
                      <p className="mt-1 text-emerald-700 leading-relaxed">
                        You have borrowed this book. Please visit the front desk of **Bhairab Pathagar** within 48 hours with your membership ID to pick up your copy.
                      </p>
                    </div>
                  </div>
                )}

                {/* Buttons Bar */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleBorrow}
                    disabled={!isAvailable}
                    className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm shadow transition duration-300 ${
                      isAvailable
                        ? "bg-gradient-to-r from-green-700 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] cursor-pointer"
                        : "bg-gray-200 text-gray-400 border border-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <FaBookOpen />
                    {isBorrowed 
                      ? "Already Borrowed" 
                      : book.availableCopies > 0 
                        ? `Borrow Book (${copiesRemaining} left)` 
                        : "Out of Stock"}
                  </button>

                  <button
                    onClick={handleWishlistToggle}
                    className={`flex items-center justify-center gap-2 py-3 px-6 border rounded-xl font-bold text-sm transition duration-300 cursor-pointer ${
                      inWishlist
                        ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <FaHeart className={inWishlist ? "fill-current" : ""} />
                    {inWishlist ? "In Wishlist" : "Wishlist"}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
