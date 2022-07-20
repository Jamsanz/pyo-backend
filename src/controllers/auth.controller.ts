import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos/user.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@/interfaces/user.interface';
import AuthService from '@services/auth.service';
import SubscriptionService from '@/services/subscription.service';
import SubscriptionDto from '@/dtos/subscription.dto';
import { AuthResponse } from '@/interfaces/authResponse.interface';

class AuthController {
  public authService = new AuthService();
  public subscriptionService = new SubscriptionService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie, findUser } = await this.authService.login(userData);

      const data: AuthResponse = {
        username: findUser.username,
        userId: findUser._id,
      };

      const subscriber = await this.subscriptionService.findSubscriptionByEmail(userData.username);
      if (subscriber != null) {
        data.firstName = subscriber.firstName;
        data.lastName = subscriber.lastName;
        data.country = subscriber.country;
        data.fellowship = subscriber.fellowship;
        data.email = subscriber.email;
        data.phone = subscriber.phone;
        data.subscriberId = subscriber._id;
      }

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data, message: 'Login successful.' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
