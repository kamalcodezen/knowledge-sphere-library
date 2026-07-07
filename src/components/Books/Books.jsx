import { useLoaderData, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Book from "../Book/Book";
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa";

const categories = ["All", "Islamic", "Academic", "Career", "Programming", "Children", "History"];

const Books = () => {
  const booksPromise = useLoaderData();
  const booksData = booksPromise.content || [];
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category") || "All";
  const wishlistParam = searchParams.get("wishlist") === "true";
  const cartParam = searchParams.get("cart") === "true";

  const [searchQuery, setSearchQuery] = useState(searchParam);

  const handleCategorySelect = (cat) => {
    const newParams = new URLSearchParams(searchParams);
    if (cat === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    setSearchParams(newParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      newParams.set("search", searchQuery.trim());
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setSearchParams({});
  };

  const filteredBooks = booksData.filter((book) => {
    const matchesWishlist = !wishlistParam || JSON.parse(localStorage.getItem("wishlist") || "[]").includes(book.id);
    const matchesCart = !cartParam || JSON.parse(localStorage.getItem("cart") || "[]").includes(book.id);
    const matchesCategory = categoryParam === "All" || book.category === categoryParam;
    const matchesSearch = 
      !searchQuery.trim() || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.description && book.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesWishlist && matchesCart && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 py-10">
      <div className="container mx-auto px-4">
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            📚 Explore Our Collection
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Browse through thousands of digital books across a variety of genres and categories.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white rounded-2xl shadow-md border border-emerald-50 p-6 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Search Input */}
            <form key={searchParam} onSubmit={handleSearchSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search by title, author, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition text-sm"
                />
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition shadow hover:scale-[1.02] cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Category Filter Pills */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                <FaFilter className="w-3 h-3 text-emerald-600" /> Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition cursor-pointer ${
                      categoryParam === cat
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {(searchQuery.trim() || categoryParam !== "All" || wishlistParam || cartParam) && (
              <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span>Showing results for:</span>
                  {categoryParam !== "All" && (
                    <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                      Category: {categoryParam}
                    </span>
                  )}
                  {searchQuery.trim() && (
                    <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                      Search: "{searchQuery}"
                    </span>
                  )}
                  {wishlistParam && (
                    <span className="bg-red-50 text-red-800 px-2.5 py-1 rounded-md font-medium border border-red-100">
                      Filter: Wishlist
                    </span>
                  )}
                  {cartParam && (
                    <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md font-medium border border-emerald-100">
                      Filter: Borrowed (Cart)
                    </span>
                  )}
                </div>
                <button
                  onClick={handleClearAll}
                  className="flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                >
                  <FaTimes /> Clear All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-100 py-16 px-4 max-w-lg mx-auto">
            <span className="text-5xl">🔍</span>
            <h3 className="text-lg font-bold text-gray-800 mt-4">No Books Found</h3>
            <p className="text-gray-500 mt-2 text-sm">
              We couldn't find any books matching your current search or filters. Try adjusting your query or category selection.
            </p>
            <button
              onClick={handleClearAll}
              className="mt-6 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold shadow hover:bg-emerald-700 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
