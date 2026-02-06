import mongoose from "mongoose";
const { Schema, model } = mongoose;

const jobSchema = new Schema(
  {
    title: { type: String },
    department: { type: String },
    experience: { type: String },
    location: { type: String },
    type: { type: String },
    description: { type: String },
    applyForm: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Job || model("Job", jobSchema);
