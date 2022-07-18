interface PyoSchedule {
  orgName: string;
  orgWebsite?: string;
  orgDescription: string;
  hostName: string;
  hostEmail: string;
  hostPhone: string;
  eventTitle: string;
  eventDate: Date | string;
  media: string;
  eventLocation: string;
  country: string;
  state: string;
  city: string;
  street: string;
  postalCode: string;
  audience: string;
  eventDescription: string;
  letter?: string;
  _id?: string;
}

export default PyoSchedule;
