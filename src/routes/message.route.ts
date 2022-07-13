import MessageController from '@/controllers/message.controller';
import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

class MessageRoute implements Routes {
  public path = '/message';
  public router: Router = Router();
  public message = new MessageController();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(this.path, this.message.getMessages);
    this.router.get(`${this.path}/:id`, this.message.getMessageById);
    this.router.post(this.path, this.message.createMessage);
    this.router.delete(`${this.path}/:id`, this.message.deleteMessage);
  }
}

export default MessageRoute;
