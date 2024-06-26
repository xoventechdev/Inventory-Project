import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brands",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ProductModel = mongoose.model("products", productSchema);
