import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import MemberRoute from './routes/member.route';
import MessageRoute from './routes/message.route';
import ScheduleRoute from './routes/schedule.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new MemberRoute(),
  new ScheduleRoute(),
  new MessageRoute()
]);

app.listen();
