import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true, // Add an index to the title field
    },
    author: {
      type: String,
      required: true,
      index: true, // Add an index to the author field
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Book = mongoose.model("Book", bookSchema);
