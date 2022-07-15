import PyoScheduleService from '@/services/pyo.schedule.service';
import { NextFunction, Request, Response } from 'express';

class PyoScheduleController {
  public schedule = new PyoScheduleService();

  public getPyoSchedules = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const schedule = await this.schedule.findAll();
      res.status(200).json({ data: schedule, message: 'found' });
    } catch (error) {
      next(error);
    }
  };

  public getPyoScheduleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const schedule = await this.schedule.findPyoScheduleById(id);
      res.status(200).json({ data: schedule, message: 'schedule found' });
    } catch (error) {
      next(error);
    }
  };

  public createPyoSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const schedule = await this.schedule.createPyoSchedule(body);
      res.status(201).json({ data: schedule, message: 'Event Created Successfully' });
    } catch (error) {
      next(error);
    }
  };

  public updatePyoSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id,
        { body } = req;
      const schedule = await this.schedule.updatePyoSchedule(id, body);
      res.status(200).json({ data: schedule, message: 'Schedule updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public deletePyoSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const schedule = await this.schedule.deletePyoSchedule(id);
      res.status(200).json({ data: schedule, message: 'schedule deleted sucessfuly' });
    } catch (error) {
      next(error);
    }
  };
}

export default PyoScheduleController;
