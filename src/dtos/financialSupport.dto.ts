import IFinancialSupport from "@/interfaces/financialSupport.interface";
import { IsString } from "class-validator";

class FinancialSupportDto implements IFinancialSupport {
  @IsString()
  public firstName: string;

  @IsString()
  public middleName?: string;

  @IsString()
  public lastName: string;

  @IsString()
  public gender: string;

  @IsString()
  public email: string;

  @IsString()
  public address: string;

  @IsString()
  public stateOfResidence: string;

  @IsString()
  public lgaOfResidence: string;

  @IsString()
  public dob: string;

  @IsString()
  public maritalStatus: string;

  @IsString()
  public qualification: string;
  
  @IsString()
  public phone: string;

  @IsString()
  public state: string;

  @IsString()
  public lga: string;

  @IsString()
  public applicantCategory: string;

  @IsString()
  public registeredWithCooperative: boolean;

  @IsString()
  public monthlyEarnings: string;

}

export default FinancialSupportDto;
