import React from "react";

// import images from assets
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const services = [
  { img: image1, title: "Valentine Special" },
  { img: image2, title: "Birthday" },
  { img: image3, title: "Baby Shower" },
  { img: image4, title: "Baby Welcome" },
  { img: image5, title: "Candlelight Dinner" },
  { img: image6, title: "Haldi / Mehndi" },
];

const About = () => {
  return (
    <div className="w-full bg-transparent px-4 py-6">
      {/* Heading with gradient and shadow */}
      <h1 className="text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 drop-shadow-sm">
        Make Every Occasion Extra Special
      </h1>

      {/* Grid with improved spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div key={index} className="group relative">
            {/* Card with hover effects and subtle border */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 group-hover:border-purple-200 group-hover:scale-[1.02]">
              {/* Image container with overflow hidden for clean edges */}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title with gradient hover effect */}
              <p className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                {item.title}
              </p>

              {/* Optional subtle description */}
              {item.description && (
                <p className="mt-2 text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              )}
            </div>

            {/* Optional decorative element */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Optional decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-100 to-transparent -z-10"></div>
    </div>
  );
};

export default About;
