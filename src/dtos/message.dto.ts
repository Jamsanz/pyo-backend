import { IMessage } from "@/interfaces/message.interface";
import { IsString } from "class-validator";

class MessageDto implements IMessage {
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
