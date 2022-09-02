import IFinancialSupport from "@/interfaces/financialSupport.interface";
import { Document, model, Schema } from "mongoose";

const financialSupportSchema = new Schema(
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
    gender: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
      required: true,
    },
    stateOfResidence: {
      type: String,
      required: true,
    },
    lgaOfResidence: {
      type: String,
      required: true,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    applicantCategory: {
      type: String,
      required: true,
    },
    registerWithCooperative: {
      type: Boolean,
      required: true,
    },
    monthlyEarnings: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model<IFinancialSupport & Document>('FinancialSupport', financialSupportSchema);
