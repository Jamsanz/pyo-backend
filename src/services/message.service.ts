import MessageDto from '@/dtos/message.dto';
import { HttpException } from '@/exceptions/HttpException';
import { IMessage } from '@/interfaces/message.interface';
import messageModel from '@/models/message.model';
import { isEmpty } from '@/utils/util';

class MessageService {
  public message = messageModel;

  public async findAll(): Promise<IMessage[]> {
    return await this.message.find();
  }

  public async findMessageById(id: string): Promise<IMessage> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.message.findById(id);
  }

  public async findMessageByEmail(email: string): Promise<IMessage> {
    if (isEmpty(email)) throw new HttpException(400, 'Bad request');
    return await this.message.findOne({ email });
  }

  public async createMessage(message: MessageDto): Promise<IMessage> {
    if (isEmpty(message)) throw new HttpException(400, 'Bad request');
    return await this.message.create(message);
  }

  public async deleteMessage(id: string): Promise<IMessage> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.message.findByIdAndDelete(id);
  }
}

export default MessageService;
