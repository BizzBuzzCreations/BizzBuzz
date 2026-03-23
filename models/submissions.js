import mongoose from "mongoose";
const { Schema, model } = mongoose;

const submissionSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    phone: { type: Number },
    message: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Submission ||
  model("Submission", submissionSchema);
