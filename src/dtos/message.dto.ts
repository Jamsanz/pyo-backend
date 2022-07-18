import { Message } from '@/interfaces/message.interface';
import { IsString } from 'class-validator';

class MessageDto implements Message {
  @IsString()
  public name: string;

  @IsString()
  public message: string;

  @IsString()
  public email: string;

  @IsString()
  public status?: boolean;
}

export default MessageDto;
