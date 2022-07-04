interface Schedule {
  title: string;
  date: Date | string;
  type: string;
  location: string;
  city: string;
  state: string;
  country: string;
  _id?: string;
  status?: boolean;
}

export default Schedule;
