import PyoSchedule from "@/interfaces/pyo.schedule.interface";
import { IsString } from "class-validator";

class PyoScheduleDto implements PyoSchedule {

  @IsString()
  public orgName: string;

  @IsString()
  public orgWebsite?: string;

  @IsString()
  public orgDescription: string;

  @IsString()
  public hostName: string;

  @IsString()
  public hostEmail: string;

  @IsString()
  public hostPhone: string;

  @IsString()
  public eventTitle: string;

  @IsString()
  public eventDate: Date | string;

  @IsString()
  public media: string;

  @IsString()
  public eventLocation: string;

  @IsString()
  public country: string;

  @IsString()
  public state: string;

  @IsString()
  public city: string;

  @IsString()
  public street: string;

  @IsString()
  public postalCode: string;

  @IsString()
  public audience: string;

  @IsString()
  public eventDescription: string;

  @IsString()
  public letter?: string;

  @IsString()
  public _id?: string;

}

export default PyoScheduleDto;
