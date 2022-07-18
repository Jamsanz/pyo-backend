import { User } from './user.interface';

export interface Subscription {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country: string;
  fellowship?: string;
  status?: boolean;
  userId?: User['_id'];
}
