import FinancialSupportController from '@/controllers/financialSupport.controller';
import { Route } from '@/interfaces/route.interface';
import { Router } from 'express';

class FinancialSupportRoute implements Route {
  public path = '/financial-supports';
  public financialSupport = new FinancialSupportController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.financialSupport.getFinancialSupport);
    this.router.get(`${this.path}/:id`, this.financialSupport.getFinancialSupportById);
    this.router.post(this.path, this.financialSupport.createFinancialSupport);
    this.router.put(`${this.path}/:id`, this.financialSupport.updateFinancialSupport);
    this.router.delete(`${this.path}/:id`, this.financialSupport.deleteFinancialSupport);
  }
}

export default FinancialSupportRoute;
