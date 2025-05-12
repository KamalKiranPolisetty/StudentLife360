import mongoose from 'mongoose';

const { Schema } = mongoose;

const activitySchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: String,
},
{timestamps:true});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;
