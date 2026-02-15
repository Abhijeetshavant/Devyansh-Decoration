import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [cardData, setcardData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/card/allcard", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setcardData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        // if(error){
        // return navigate("/login");
        // }
      });
  }, []);

  // whatsapp
  const handleWhatsApp = (item) => {
    const phoneNumber = "916396028950";
    const message = `
Hi, I want to book this product:

📌 Title: ${item.title}
💰 Price: ₹${item.price}
🏷️ Discount Price: ₹${item.discount}
🖼️ Image: ${item.img}

Please provide more details.
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="px-6 py-10">
      {/* Heading Section */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Best Selling Decoration
        </h1>
        <p className="text-lg text-gray-600">
          Decoration & Beauty Products all over India
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
        {cardData.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 bg-white px-3  py-1 rounded-lg text-sm font-semibold shadow">
                ⭐ 4.1
              </div>

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-82 object-container"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl font-bold text-red-600">
                  ₹{item.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹ {item.discount}
                </span>
              </div>

              <button
                onClick={() => handleWhatsApp(item)}
                className="w-full bg-blue-800 text-white py-3 rounded-xl font-semibold text-base hover:bg-blue-900 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
