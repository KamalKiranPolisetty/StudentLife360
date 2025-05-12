import mongoose from 'mongoose';

const { Schema } = mongoose;

const voteSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  candidate: { type: String, enum: ['John', 'Mary', 'Susan'], required: true }
});

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
