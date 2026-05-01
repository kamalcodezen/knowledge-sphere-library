import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";
import { Link } from "react-router-dom";

const HomePage = () => {
  const booksPromise = useLoaderData();
  const booksData = booksPromise.content;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100">
      {/* Banner */}
      <Banner />

      {/* Books Section */}
      <div className="container mx-auto px-4 mt-10 pb-20">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            📚 Featured Books
          </h2>

          <Link
            to="/books"
            className="text-sm font-medium text-emerald-600 hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* Gradient Line */}
        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-400 mb-6 rounded"></div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-20">
          {booksData.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
