import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSelectionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  activityIds: [{ type: Schema.Types.ObjectId, ref: 'Activity', required: true }],
});

const UserSelection = mongoose.model('UserSelection', userSelectionSchema);

export default UserSelection;
