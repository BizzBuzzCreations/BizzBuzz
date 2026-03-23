import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    name: { type: String },
    message: { type: String },
    blog: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Comment || model("Comment", commentSchema);
