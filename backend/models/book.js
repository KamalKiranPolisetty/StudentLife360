import mongoose from 'mongoose';

const { Schema } = mongoose;

const textbookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  availableInLibrary: { type: Boolean, default: true },
  libraryLocation: String,
  bookstoreName: String,
});

const Textbook = mongoose.model('Textbook', textbookSchema);

export default Textbook;
