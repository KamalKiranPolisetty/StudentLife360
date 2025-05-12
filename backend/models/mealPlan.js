import mongoose from 'mongoose';

const { Schema } = mongoose;

const mealPlanSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  duration: { type: String, enum: ['month', 'semester'], required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

export default MealPlan;
