import ISponsor from "@/interfaces/sponsor.interface";
import { IsNumber, IsString } from "class-validator";

class SponsorsDto implements ISponsor {

  @IsString()  
  public firstName: string;

  @IsString()
  public middleName?: string;

  @IsString()
  public lastName: string;

  @IsString()  
  public gender: string;

  @IsString()
  public offer: "Grant" | "Micro Credit";

  @IsString()  
  public email: string;

  @IsString()
  public phone: string;

  @IsString()
  public nationality: string;

  @IsNumber()
  public amount: string;

  @IsString()
  public location?: string;

  @IsString()
  public sponsor_count: number;

}

export default SponsorsDto;
