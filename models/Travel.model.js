import { Schema, model } from "mongoose";

const travelModel = new Schema({
  title: {
    type: String,
    required: true,
    minlenght: 3,
  },
  image: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

export default model("Travel", travelModel);
