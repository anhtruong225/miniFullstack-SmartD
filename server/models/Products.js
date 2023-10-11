import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "product_name is required"],
    trim: true,
  },
  category: {
    type: [String],
    default: "canned food",
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image_URL: {
    type: String,
    default: "default.jpg",
    trim: true,
  },
  date_of_expiry: {
    type: Date,
    default: Date.now,
    required: [true, "date_of_expiry is required"],
    trim: true,
  },
  manufacture: {
    type: String,
    default: "Manufacture A",
    trim: true,
  },
  country_of_origin: {
    type: String,
    default: "Germany",
    trim: true,
  },
  supplier: {
    type: String,
    default: "Supplier B",
    trim: true,
  },
  date_of_supply: {
    type: Date,
    default: Date.now,
    required: [true, "date_of_supply is required"],
    trim: true,
  },
  quantity_in_items: {
    type: Number,
    default: 1,
    required: [true, "quantity_in_items is required"],
    trim: true,
  },
  quantity_remaining: {
    type: Number,
    default: 1,
    trim: true,
  },
});
export default mongoose.model("Product", productSchema);
