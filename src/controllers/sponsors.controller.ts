import SponsorsService from "@/services/sponsors.service";
import { NextFunction, Request, Response } from "express";

class SponsorsController {
  public sponsors = new SponsorsService();

  public getSponsors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sponsors = await this.sponsors.findAll();
      res.status(200).json({ data: sponsors, message: `${sponsors.length} sponsors found` });
    } catch (error) {
      next(error);
    }
  };

  public getSponsorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const sponsor = await this.sponsors.findById(id);
      res.status(200).json({ data: sponsor, message: 'Sponsor found' });
    } catch (error) {
      next(error);
    }
  };

  public createSponsor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const sponsor = await this.sponsors.create(body);
      res.status(201).json({ data: sponsor, message: 'Registration Successful' });
    } catch (error) {
      next(error);
    }
  };

  public updateSponsor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id,
        body = req.body;
      const sponsor = await this.sponsors.update(id, body);
      res.status(200).json({ data: sponsor, message: 'Update Successful' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSponsor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const sponsor = await this.sponsors.delete(id);
      res.status(200).json({ data: sponsor, message: 'Sponsor deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}

export default SponsorsController;
