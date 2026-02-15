import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import haldi from "../assets/haldi.png";
import valentines from "../assets/valentines.png";
import aniversery from "../assets/aniversery.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const slides = [
  { image: haldi },
  { image: valentines },
  { image: aniversery },
  { image: image1 },
  { image: image2 },
];

const MainHero = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: dir === "left" ? -slider.clientWidth : slider.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Left */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
      >
        <ChevronRight size={26} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="relative min-w-full snap-start overflow-hidden"
          >
            {/* Height increased */}
            <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover lg:object-contain lg:bg-black"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Title */}
              <h2 className="absolute bottom-6 left-6 text-xl md:text-3xl font-semibold text-white">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainHero;
