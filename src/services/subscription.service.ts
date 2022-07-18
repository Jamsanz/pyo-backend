import SubscriptionDto from '@/dtos/subscription.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Subscription } from '@/interfaces/subscription.interface';
import subscriptionModel from '@/models/subscription.model';
import { isEmpty } from '@/utils/util';

class SubscriptionService {
  public subscription = subscriptionModel;

  public async findAll(): Promise<Subscription[]> {
    return await this.subscription.find();
  }

  public async findSubscriptionById(id: string): Promise<Subscription> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.subscription.findById(id);
  }

  public async findSubscriptionByEmail(email: string): Promise<Subscription> {
    if (isEmpty(email)) throw new HttpException(400, 'Bad request');
    return await this.subscription.findOne({ email });
  }

  public async createSubscription(subcription: SubscriptionDto): Promise<Subscription> {
    if (isEmpty(subcription)) throw new HttpException(400, 'Bad request');
    const findSubscription = this.subscription.find({ email: subcription.email });
    if ((await findSubscription).length > 0) throw new HttpException(409, 'This email already exists');
    return await this.subscription.create(subcription);
  }

  public async updateSubscription(id: string, subcription: SubscriptionDto): Promise<Subscription> {
    if (isEmpty(id) || isEmpty(subcription)) throw new HttpException(400, 'Bad request');
    return await this.subscription.findByIdAndUpdate(id, subcription);
  }
  public async deleteSubscription(id: string): Promise<Subscription> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.subscription.findByIdAndDelete(id);
  }
}

export default SubscriptionService;
