import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "https://devyansh-decoration.vercel.app/api/card";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(null);

  // ✅ Fetch Cards
  const fetchCards = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${API_URL}/allcard`, {
        withCredentials: true,
      });

      if (data?.success) {
        setCardData(data.data || []);
      } else {
        toast.error("Failed to fetch cards");
      }
    } catch (error) {
      console.error("Fetch error:", error.response?.data || error.message);
      toast.error("Error fetching cards");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  // ✅ Delete Card
  const handleDelete = async (id) => {
    if (!id) return toast.error("Invalid card ID");

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this card?",
    );
    if (!confirmDelete) return;

    try {
      setIsDeleting(id);

      const { data } = await axios.delete(`${API_URL}/delete/${id}`, {
        withCredentials: true,
      });

      if (data?.success) {
        setCardData((prev) => prev.filter((item) => item._id !== id));
        toast.success("Card deleted successfully!");
      } else {
        toast.error(data?.message || "Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      toast.error("Failed to delete card");
    } finally {
      setIsDeleting(null);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-IN");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Manage your decoration cards</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Total Cards:{" "}
            <span className="font-semibold">{cardData.length}</span>
          </div>

          <div className="flex gap-3">
            {/* 🔥 Add New Card Button */}
            <button
              onClick={() => navigate("/card")}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              + Add New Card
            </button>

            <button
              onClick={fetchCards}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : cardData.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">📭</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Cards Found
          </h3>

          {/* 🔥 Add button inside empty state */}
          <button
            onClick={() => navigate("/card")}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            + Add First Card
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {cardData.map((item) => (
            <div
              key={item._id || item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div className="relative h-48">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item._id && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    ID: {item._id.substring(0, 8)}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {item.description || "No description available"}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      ₹{item.price}
                    </span>
                    {item.discount > 0 && (
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ₹{item.discount}
                      </span>
                    )}
                  </div>

                  <div className="text-sm text-gray-500">
                    {formatDate(item.createdAt)}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleDelete(item._id)}
                    disabled={isDeleting === item._id}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition disabled:opacity-50"
                  >
                    {isDeleting === item._id ? "Deleting..." : "Delete Card"}
                  </button>

                  <button
                    onClick={() =>
                      toast.info("Edit functionality coming soon!")
                    }
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
