import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

const bookdata = mongoose.model("book_data", bookSchema);

export default bookdata;
