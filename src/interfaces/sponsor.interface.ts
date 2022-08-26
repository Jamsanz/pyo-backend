interface ISponsor {
  _id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  nationality: string;
  offer: "Grant" | "Micro Credit";
  amount: string;
  location?: string;
  sponsor_count: number;
}

export default ISponsor;