import ScheduleService from "@/services/schedule.service";
import { NextFunction, Request, Response } from "express";

class ScheduleController {
  public schedule = new ScheduleService();

  public getSchedules = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const schedule = await this.schedule.findAll();
      res.status(200).json({ data: schedule, message: 'found' });
    } catch (error) {
      next(error);
    }
  };

  public getScheduleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const schedule = await this.schedule.findScheduleById(id);
      res.status(200).json({ data: schedule, message: 'schedule found' });
    } catch (error) {
      next(error);
    }
  };

  public getScheduleByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const schedule = await this.schedule.findScheduleByUserId(id);
      res.status(200).json({ data: schedule, message: 'schedule found' });
    } catch (error) {
      next(error);
    }
  };

  public createSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const schedule = await this.schedule.createSchedule(body);
      res.status(201).json({ data: schedule, message: 'Event Created Successfully' });
    } catch (error) {
      next(error);
    }
  };

  public updateSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id,
        { body } = req;
      const schedule = await this.schedule.updateSchedule(id, body);
      res.status(200).json({ data: schedule, message: 'Schedule updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const schedule = await this.schedule.deleteSchedule(id);
      res.status(200).json({data: schedule, message: 'schedule deleted sucessfuly'})
    } catch (error) {
      next(error);
    }
  };
}

export default ScheduleController;
