const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 1 },
  image: { type: String },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
