import SubscriptionController from '@/controllers/subscription.controller';
import { Route } from '@/interfaces/route.interface';
import { Router } from 'express';

class SubscriptionRoute implements Route {
  public path = '/signup';
  public router: Router = Router();
  public subscription = new SubscriptionController();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(this.path, this.subscription.getSubscriptions);
    this.router.get(`${this.path}/:id`, this.subscription.getSubscriptionById);
    this.router.post(this.path, this.subscription.createSubscription);
    this.router.put(`${this.path}/:id`, this.subscription.updateSubscription);
    this.router.delete(`${this.path}/:id`, this.subscription.deleteSubscription);
  }
}

export default SubscriptionRoute;
