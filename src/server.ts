import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import SubscriptionRoute from './routes/subscription.route';
import MessageRoute from './routes/message.route';
import PyoScheduleRoute from './routes/pyo.schedule.route';
import ScheduleRoute from './routes/schedule.route';
import SponsorsRoute from './routes/sponsor.route';
import FinancialSupportRoute from './routes/financialSupport.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new SubscriptionRoute(),
  new ScheduleRoute(),
  new MessageRoute(),
  new PyoScheduleRoute(),
  new SponsorsRoute(),
  new FinancialSupportRoute()
]);

app.listen();
