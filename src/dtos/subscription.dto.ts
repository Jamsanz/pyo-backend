import { IsEmail, IsString } from 'class-validator';

class SubscriptionDto {
  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsEmail()
  public email: string;

  @IsString()
  public phone?: string;

  @IsString()
  public country: string;

  @IsString()
  public fellowship?: string;
}

export default SubscriptionDto;
