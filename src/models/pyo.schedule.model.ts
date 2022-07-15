import PyoSchedule from "@/interfaces/pyo.schedule.interface";
import { Document, model, Schema } from "mongoose";

const pyoScheduleSchema = new Schema({
  orgName: {
    type: String,
    required: true,
  },
  orgWebsite: {
    type: String,
    required: false,
  },
  orgDescription: {
    type: String,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  hostEmail: {
    type: String,
    required: true,
  },
  hostPhone: {
    type: String,
    required: true,
  },
  eventTitle: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  audience: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  letter: {
    type: String,
    required: false,
  },
});

export default model<PyoSchedule & Document>('PyoSchedule', pyoScheduleSchema);
