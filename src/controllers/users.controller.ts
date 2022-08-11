import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos/user.dto';
import { User } from '@/interfaces/user.interface';
import userService from '@services/users.service';
import SubscriptionService from '@/services/subscription.service';
import { AuthResponse } from '@/interfaces/authResponse.interface';
import { Subscription } from '@/interfaces/subscription.interface';

class UsersController {
  public userService = new userService();
  public subscriptionService = new SubscriptionService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: User[] = await this.userService.findAllUser();      
      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {;
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneUserData: User = await this.userService.findUserById(userId);
      const data: AuthResponse = {
        username: findOneUserData.username,
        userId: findOneUserData._id,
      };

      const subscriber = await this.subscriptionService.findSubscriptionByEmail(findOneUserData.username);
      if (subscriber != null) {
        data.firstName = subscriber.firstName;
        data.lastName = subscriber.lastName;
        data.country = subscriber.country;
        data.fellowship = subscriber.fellowship;
        data.email = subscriber.email;
        data.phone = subscriber.phone;
      }
      res.status(200).json({ data, message: 'User findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const createUserData: User = await this.userService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const userData: CreateUserDto = req.body;
      const updateUserData: User = await this.userService.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const deleteUserData: User = await this.userService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
