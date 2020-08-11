const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      trim: true
    },
    authors: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    image: {
      type: String,
      trim: true
    },
    link: {
      type: String,
      trim: true
    },
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;