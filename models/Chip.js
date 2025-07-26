import mongoose from "mongoose";

const chipSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
});

export const Chip = mongoose.model("Chip", chipSchema);
