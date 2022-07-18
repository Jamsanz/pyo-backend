import PyoScheduleController from '@/controllers/pyo.schedule.controller';
import { Route } from '@/interfaces/route.interface';
import { Router } from 'express';

class PyoScheduleRoute implements Route {
  public router = Router();
  public schedule = new PyoScheduleController();
  public path = '/pyo-schedule';

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.schedule.getPyoSchedules);
    this.router.get(`${this.path}/:id`, this.schedule.getPyoScheduleById);
    this.router.post(this.path, this.schedule.createPyoSchedule);
    this.router.put(`${this.path}/:id`, this.schedule.updatePyoSchedule);
    this.router.delete(`${this.path}/:id`, this.schedule.deletePyoSchedule);
  }
}

export default PyoScheduleRoute;
