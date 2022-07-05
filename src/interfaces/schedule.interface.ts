import { IMember } from "./users.interface";

interface Schedule {
  title: string;
  date: Date | string;
  type: string;
  location: string;
  city: string;
  state: string;
  country: string;
  _id?: string;
  userId: IMember['_id'];
  status?: boolean;
}

export default Schedule;
