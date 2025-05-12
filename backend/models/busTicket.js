import mongoose from "mongoose";

const { Schema } = mongoose;

const busTicketSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  zones: [{ type: String, enum: ["Zone1", "Zone2", "Zone3"], required: true }],
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true }
}, { timestamps: true });

const BusTicket = mongoose.model("BusTicket", busTicketSchema);

export default BusTicket;
