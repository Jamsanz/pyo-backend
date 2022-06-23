import { IMember } from "@/interfaces/users.interface";
import { IsEmail, IsString } from "class-validator";

class MemberDto implements IMember {
  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsEmail()
  public email: string;

  @IsString()
  public country: string;
}

export default MemberDto;
