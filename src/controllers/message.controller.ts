import MessageDto from '@/dtos/message.dto';
import MessageService from '@/services/message.service';
import { NextFunction, Request, Response } from 'express';

class MessageController {
  public message = new MessageService();

  public getMessages = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const messages = await this.message.findAll();
      res.status(200).json({ data: messages, message: 'Found all messages' });
    } catch (error) {
      next(error);
    }
  };

  public getMessageById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const message = await this.message.findMessageById(id);
      res.status(200).json({ data: message, message: 'message found' });
    } catch (error) {
      next(error);
    }
  };

  public getMessageByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email;
      const message = await this.message.findMessageByEmail(email);
      res.status(200).json({ data: message, message: 'message found' });
    } catch (error) {
      next(error);
    }
  };

  public createMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: MessageDto = req.body;
      const message = await this.message.createMessage(data);
      res.status(201).json({ data: message, message: 'Registration successful' });
    } catch (error) {
      next(error);
    }
  };

  public deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const message = await this.message.deleteMessage(id);
      res.status(200).json({ data: message, message: 'message deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}

export default MessageController;
