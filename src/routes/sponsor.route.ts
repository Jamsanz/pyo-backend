import SponsorsController from "@/controllers/sponsors.controller";
import { Route } from "@/interfaces/route.interface";
import { Router } from "express";

class SponsorsRoute implements Route {
  public path = '/sponsors';
  public sponsors = new SponsorsController();
  public router = Router();

  constructor() {
    this.initializeRoutes()  
  }

  private initializeRoutes() {
        this.router.get(this.path, this.sponsors.getSponsors);
        this.router.get(`${this.path}/:id`, this.sponsors.getSponsorById);
        this.router.post(this.path, this.sponsors.createSponsor);
        this.router.put(`${this.path}/:id`, this.sponsors.updateSponsor);
        this.router.delete(`${this.path}/:id`, this.sponsors.deleteSponsor);
  }

}

export default SponsorsRoute;
