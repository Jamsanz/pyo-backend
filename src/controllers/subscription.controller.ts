import SubscriptionDto from '@/dtos/subscription.dto';
import { CreateUserDto } from '@/dtos/user.dto';
import AuthService from '@/services/auth.service';
import SubscriptionService from '@/services/subscription.service';
import UserService from '@/services/users.service';
import { NextFunction, Request, Response } from 'express';
import { generateString } from '../utils/helpers';

class SubscriptionController {
  public subscription = new SubscriptionService();
  public auth = new AuthService();
  public user = new UserService();

  public getSubscriptions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subscriptions = await this.subscription.findAll();
      res.status(200).json({ data: subscriptions, message: 'Found all subscriptions.' });
    } catch (error) {
      next(error);
    }
  };

  public getSubscriptionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const subscription = await this.subscription.findSubscriptionById(id);
      res.status(200).json({ data: subscription, message: 'Subscriber found.' });
    } catch (error) {
      next(error);
    }
  };

  public getSubscriptionByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email;
      const subscription = await this.subscription.findSubscriptionByEmail(email);

      if (subscription != null) {
        res.status(200).json({ data: subscription, message: 'Subscription found.' });
      } else {
      }
    } catch (error) {
      next(error);
    }
  };

  public createSubscription = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: SubscriptionDto = req.body;
      const subscription = await this.subscription.createSubscription(data);
      if (subscription != null) {
        // TODO: Do not create user until approved by admin
        if (subscription.fellowship.length > 0) {
          const userDto: CreateUserDto = { username: data.email, password: generateString() };
          this.user.createUser(userDto);
        }
        res.status(201).json({ data: subscription, message: 'Signup successful.' });
      } else {
        res.status(400).json({ data: null, message: 'Sugnup failed.' });
      }
    } catch (error) {
      next(error);
    }
  };

  public updateSubscription = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: SubscriptionDto = req.body;
      const id = req.params.id;
      const subscription = await this.subscription.updateSubscription(id, data);
      res.status(201).json({ data: subscription, message: 'Subscription updated sucessfully.' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSubscription = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const subscription = await this.subscription.deleteSubscription(id);
      res.status(200).json({ data: subscription, message: 'Subscription deleted successfully.' });
    } catch (error) {
      next(error);
    }
  };
}

export default SubscriptionController;
