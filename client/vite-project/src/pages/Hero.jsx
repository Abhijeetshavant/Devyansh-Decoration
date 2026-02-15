import React from "react";
import backgroundImg from "../assets/backgroundimg1.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[55vh] md:min-h-[72vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center px-5">
        <span className="inline-block mb-3 px-3 py-1 text-xs md:text-sm font-semibold rounded-full bg-white/20 text-white">
          TOP RATED IN NOIDA
        </span>

        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-3">
          Transform Your Celebration with Meerut&apos;s Top Event Decorators
        </h1>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-5">
          Affordable packages tailored to your celebration needs — starting at{" "}
          <span className="font-semibold text-white">₹2599</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
