import { IMember } from '@/interfaces/users.interface';
import { IsEmail, IsString } from 'class-validator';

class MemberDto implements IMember {
  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsEmail()
  public email: string;

  @IsString()
  public country: string;

  @IsString()
  public fellowship: string;
}

export default MemberDto;
