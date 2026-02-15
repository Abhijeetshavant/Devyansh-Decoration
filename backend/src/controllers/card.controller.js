import cardModel from "../models/card.model.js";
import uploadFile from "../services/storage.service.js";

import { v4 as uuid } from "uuid";

// ✅ CREATE CARD
async function createCard(req, res) {
  try {
    const { title, description, price, discount } = req.body;

    if (!title || !price || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Title, price and image are required",
      });
    }

    const fileUploadResult = await uploadFile(req.file.buffer, uuid());

    const card = await cardModel.create({
      title,
      description,
      price: Number(price),
      discount: Number(discount || 0),
      img: fileUploadResult.url,
    });

    return res.status(201).json({
      success: true,
      message: "Card created successfully",
      data: card,
    });
  } catch (error) {
    console.error("Create card error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
}

// ✅ GET ALL CARDS
async function allcard(req, res) {
  try {
    const data = await cardModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: data,
      message: "Cards fetched successfully",
    });
  } catch (error) {
    console.error("Fetch cards error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching cards",
    });
  }
}

// ✅ DELETE CARD
async function deleteCard(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Card ID is required",
      });
    }

    const deletedCard = await cardModel.findByIdAndDelete(id);

    if (!deletedCard) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Card deleted successfully",
    });
  } catch (error) {
    console.error("Delete card error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting card",
    });
  }
}

export default {
  createCard,
  allcard,
  deleteCard,
};
