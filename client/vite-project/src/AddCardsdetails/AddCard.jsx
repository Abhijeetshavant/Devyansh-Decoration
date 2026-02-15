import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { set } from "mongoose";

const AddCard = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    // name: "",
    // description: "",
    // price: "",
    // discount: "",
    // category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // For preview

  const [createMsg, setCreateMsg] = useState("");

  // Handle normal input fields
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload with preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create preview URL
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("img", image);
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("discount", product.discount);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/card/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      // console.log(res);
      setCreateMsg(
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 min-w-80">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <h3 className="text-xl font-bold">Success!</h3>
              <p className="text-sm opacity-90">Item created</p>
            </div>
            <button className="ml-auto text-white hover:text-gray-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>,
      );

      setTimeout(() => {
        setCreateMsg("");
      }, 3000);

      // Optional: reset form
      setProduct({ title: "", description: "", price: "", discount: "" });
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Frontend upload error:", error.response?.data || error);
      alert("❌ Upload failed");

      // console.log(error);
      alert("Error uploading product");

      //    console.log(error)
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-black flex justify-center items-center p-6 ">
        {createMsg}

        <div className="w-full max-w-6xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
          {/* HeadTitle */}
          <div className="bg-linear-to-r from-indigo-600 to-purple-700 px-8 py-10 text-center">
            <h1 className="text-4xl font-extrabold text-white tracking-wide">
              Divyansh Event Decoration Items sell
            </h1>
            <p className="text-purple-200 mt-2 text-lg font-medium">
              Add New Product
            </p>
          </div>

          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Product Image Upload with Preview */}
              <div className="space-y-4">
                <label className="block text-md font-semibold text-gray-800">
                  Product Image
                </label>
                <input
                  type="file"
                  accept="img/*"
                  onChange={handleImageChange}
                  className="w-full text-gray-700 file:mr-4 file:py-3 file:px-6 
                file:rounded-xl file:border-0 file:text-md file:font-bold 
                file:bg-linear-to-r file:from-indigo-600 file:to-purple-600 
                file:text-white hover:file:from-indigo-700 hover:file:to-purple-700 
                cursor-pointer transition duration-300"
                />

                {/* Image Preview */}
                {imagePreview && (
                  <div className="mt-6 flex justify-center">
                    <div className="relative group">
                      <img
                        src={imagePreview}
                        alt="Product preview"
                        className="max-h-96 rounded-2xl shadow-lg border-4 border-indigo-200 
                      object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-bold text-lg">
                          Selected Image
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Name */}
              <div>
                <label className="block text-md font-semibold text-gray-800 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter product name"
                  className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-xl 
                focus:ring-4 focus:ring-purple-300 focus:border-purple-600 outline-none transition"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-md font-semibold text-gray-800 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Describe your product..."
                  className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-xl 
                focus:ring-4 focus:ring-purple-300 focus:border-purple-600 outline-none resize-none transition"
                />
              </div>

              {/* Price and Discount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-md font-semibold text-gray-800 mb-2">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    placeholder="0.00"
                    min="0"
                    // step="0.01"
                    className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-xl 
                  focus:ring-4 focus:ring-purple-300 focus:border-purple-600 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold text-gray-800 mb-2">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={product.discount}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    max="100"
                    className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-xl 
                  focus:ring-4 focus:ring-purple-300 focus:border-purple-600 outline-none transition"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-indigo-600 to-purple-700 text-white 
              py-5 rounded-xl font-bold text-xl hover:from-indigo-700 hover:to-purple-800 
              transform hover:scale-105 transition duration-300 shadow-xl"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCard;
