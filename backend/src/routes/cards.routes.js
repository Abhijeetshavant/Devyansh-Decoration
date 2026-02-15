import express from "express";
import cardController from "../controllers/card.controller.js";
// import authMiddleware from "../middleware/auth.middleware.js";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

// ✅ CREATE CARD
router.post(
  "/",
  // authMiddleware.authAdminMiddleware,
  upload.single("img"),
  cardController.createCard,
);

// ✅ GET ALL CARDS
router.get("/allcard", cardController.allcard);

// ✅ DELETE CARD
router.delete(
  "/delete/:id",
  // authMiddleware.authAdminMiddleware,
  cardController.deleteCard,
);
export default router;
