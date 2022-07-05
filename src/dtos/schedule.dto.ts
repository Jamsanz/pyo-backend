import { IsBoolean, IsString } from "class-validator";
import Schedule from "@/interfaces/schedule.interface";

class ScheduleDto implements Schedule{
  @IsString()
  public title: string;

  @IsString()
  public type: string;

  @IsString()
  public location: string;

  @IsString()
  public date: Date | string;

  @IsString()
  public city: string;

  @IsString()
  public state: string;

  @IsString()
  public country: string;

  @IsBoolean()
  public status: boolean;

  @IsString()
  public userId: string;
}

export default ScheduleDto;
