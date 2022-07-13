import { IMessage } from "@/interfaces/message.interface";
import { Document, model, Schema } from "mongoose";

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
    default: false
  }
});

export default model<IMessage & Document>('Message', messageSchema);
