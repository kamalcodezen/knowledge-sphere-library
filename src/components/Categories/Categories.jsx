import { useState } from "react";
import mockBooks from "../../data/books.json";
import Book from "../Book/Book";
import { FaBookmark, FaFolderOpen } from "react-icons/fa";

const categoriesData = [
  {
    name: "Islamic",
    img: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=400",
    desc: "Biographies, Tafsir, and Islamic history books.",
  },
  {
    name: "Academic",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400",
    desc: "Mathematics, science, and educational textbooks.",
  },
  {
    name: "Career",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400",
    desc: "Professional growth, productivity, and leadership.",
  },
  {
    name: "Programming",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
    desc: "Software development, programming languages, and craftsmanship.",
  },
  {
    name: "Children",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400",
    desc: "Fables, literature, and learning books for kids.",
  },
  {
    name: "History",
    img: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=400",
    desc: "Biographies, historical diaries, and space history.",
  },
];

const Categories = () => {
  const [active, setActive] = useState("Islamic");

  const filteredBooks = mockBooks.filter((book) => book.category === active);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight flex items-center justify-center gap-2">
            <FaFolderOpen className="text-emerald-600" /> Browse Categories
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Select a genre below to explore books cataloged in that section.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categoriesData.map((cat, index) => (
            <div
              key={index}
              onClick={() => setActive(cat.name)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden group transition-all duration-500 shadow-sm hover:shadow-lg ${
                active === cat.name
                  ? "ring-4 ring-emerald-500 scale-105 shadow-emerald-500/20"
                  : "hover:scale-[1.03]"
              }`}
            >
              {/* Image */}
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-32 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-sm font-bold tracking-wide">{cat.name}</h3>
                <span className="text-[9px] text-gray-200 hidden group-hover:block transition duration-300">
                  Click to view
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Category Heading & Description */}
        <div className="border-b border-emerald-100 pb-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaBookmark className="text-emerald-600" /> {active} Books
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {categoriesData.find((c) => c.name === active)?.desc}
            </p>
          </div>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
            {filteredBooks.length} {filteredBooks.length === 1 ? "Book" : "Books"} Found
          </span>
        </div>

        {/* Filtered Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-100 py-16 px-4 max-w-lg mx-auto">
            <span className="text-5xl">📚</span>
            <h3 className="text-lg font-bold text-gray-800 mt-4">No Books in this Category</h3>
            <p className="text-gray-500 mt-2 text-sm">
              We currently don't have any books cataloged under "{active}". Please check back later or try another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;