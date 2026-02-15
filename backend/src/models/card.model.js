import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // e.g. "Birthday Balloon Decoration"
      trim: true,
    },
    img: {
      type: String,
      required: true, // image URL
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true, // original price e.g. 1899
    },
    discount: {
      type: Number,
      default: 0, // discount amount or percentage
    },
    finalPrice: {
      type: Number,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
  },
  { timestamps: true },
);

// // Automatically calculate final price
// cardSchema.pre("save", function (next) {
//   if (this.discount > 0) {
//     this.finalPrice = this.price - this.discount;
//   } else {
//     this.finalPrice = this.price;
//   }
//   next();
// });

const CardModel = mongoose.model("card", cardSchema);
export default CardModel;
