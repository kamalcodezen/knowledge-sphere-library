import { useState, useEffect, useRef } from "react";

import img1 from "../../assets/banner-1.jpg";
import img2 from "../../assets/banner-2.jpg";
import img3 from "../../assets/banner-3.jpg";
import img4 from "../../assets/banner-4.jpg";
import img5 from "../../assets/banner-5.jpg";
import img6 from "../../assets/banner-6.jpg";
import img7 from "../../assets/banner-7.jpg";
import img8 from "../../assets/banner-8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Next / Prev
  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  //  Swipe Support
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 50) next();
    if (touchStart.current - touchEnd.current < -50) prev();
  };

  return (
    <div
      className="relative w-full h-[520px] md:h-[430px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/*  Fade Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="banner"
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Discover Your Next Favorite Book
        </h1>

        <p className="mt-3 text-sm md:text-lg text-gray-200">
            Explore thousands of books  from our <br /> digital library and start reading today.

        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 px-8 py-3 
  bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 
  text-white font-semibold rounded-full shadow-lg 
  hover:shadow-green-500/40 hover:scale-105 active:scale-95 
  transition-all duration-300 cursor-pointer"
        >
          Browse Books →
        </button>
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white px-4 py-2 rounded-full cursor-pointer"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white px-4 py-2 rounded-full cursor-pointer"
      >
        ❯
      </button>

      {/*  Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
