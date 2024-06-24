import mongoose, { Schema } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const TODO = mongoose.model("TODO", todoSchema);
