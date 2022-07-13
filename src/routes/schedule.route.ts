import ScheduleController from "@/controllers/schedule.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

class ScheduleRoute implements Routes {
  public router = Router();
  public schedule = new ScheduleController();
  public path = '/schedule';

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.schedule.getSchedules);
    this.router.get(`${this.path}/:id`, this.schedule.getScheduleById);
    this.router.get(`${this.path}/user/:id`, this.schedule.getScheduleByUserId);
    this.router.post(this.path, this.schedule.createSchedule);
    this.router.put(`${this.path}/:id`, this.schedule.updateSchedule);
    this.router.delete(`${this.path}/:id`, this.schedule.deleteSchedule);
  }
}

export default ScheduleRoute;
