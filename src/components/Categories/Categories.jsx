import { useState } from "react";

const categoriesData = [
  {
    name: "Islamic",
    img: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f",
  },
  {
    name: "Academic",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    name: "Career",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
  {
    name: "Programming",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Children",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
  },
  {
    name: "History",
    img: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
  },
];

const Categories = ({ onSelect }) => {
  const [active, setActive] = useState("Islamic");

  const handleClick = (cat) => {
    setActive(cat);
    onSelect && onSelect(cat);
  };

  return (
    <div className="my-10 container">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        📂 Browse Categories
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {categoriesData.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleClick(cat.name)}
            className={`relative cursor-pointer rounded-xl overflow-hidden group transition-all duration-300
            ${
              active === cat.name
                ? "ring-2 ring-emerald-500 scale-105"
                : "hover:scale-105"
            }`}
          >
            {/* Image */}
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-32 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;