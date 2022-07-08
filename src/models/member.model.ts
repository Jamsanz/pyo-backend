import { IMember } from "@/interfaces/users.interface";
import { Document, model, Schema } from "mongoose";

const memberSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  fellowship: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default model<IMember & Document>('Member', memberSchema);
