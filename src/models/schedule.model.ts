import { Document, model, Schema } from "mongoose";
import Schedule from '../interfaces/schedule.interface'

const scheduleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: false,
      default: false
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Member'
    }
  },
  { timestamps: true },
);

export default model<Schedule & Document>('Schedule', scheduleSchema);
