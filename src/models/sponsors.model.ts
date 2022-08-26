import ISponsor from "@/interfaces/sponsor.interface";
import { Document, model, Schema } from "mongoose";

const sponsorsSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    offer: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    sponsor_count: {
      type: Number,
      required: true
    }
  },
  { timestamps: true },
);

export default model<ISponsor & Document>('Sponsor', sponsorsSchema);
