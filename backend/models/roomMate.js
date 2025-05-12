import mongoose from 'mongoose';

const { Schema } = mongoose;

const roommateSchema = new Schema({
  moveInDate: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  approximatePrice: { type: Number, required: true },
  // Add more fields as needed
});

const Roommate = mongoose.model('Roommate', roommateSchema);

export default Roommate;
