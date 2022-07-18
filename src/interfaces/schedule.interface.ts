import { Subscription } from './subscription.interface';

interface ISchedule {
  title: string;
  date: Date | string;
  type: string;
  location: string;
  city: string;
  state: string;
  country: string;
  _id?: string;
  userId: Subscription['userId'];
  status?: boolean;
}

export default ISchedule;
