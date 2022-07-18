import { model, Schema, Document } from 'mongoose';
import { Subscription } from '@/interfaces/subscription.interface';

const subscriptionSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  fellowship: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const subscriptionModel = model<Subscription & Document>('Subscription', subscriptionSchema);

export default subscriptionModel;
