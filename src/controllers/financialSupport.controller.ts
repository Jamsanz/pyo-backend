import FinancialSupportService from '@/services/financialSupport.service';
import { NextFunction, Request, Response } from 'express';

class FinancialSupportController {
  public financialSupport = new FinancialSupportService();

  public getFinancialSupport = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const financialSupport = await this.financialSupport.findAll();
      res.status(200).json({ data: financialSupport, message: `${financialSupport.length} financialSupport found` });
    } catch (error) {
      next(error);
    }
  };

  public getFinancialSupportById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const financialSupport = await this.financialSupport.findById(id);
      res.status(200).json({ data: financialSupport, message: 'financialSupport found' });
    } catch (error) {
      next(error);
    }
  };

  public createFinancialSupport = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const financialSupport = await this.financialSupport.create(body);
      res.status(201).json({ data: financialSupport, message: 'Registration Successful' });
    } catch (error) {
      next(error);
    }
  };

  public updateFinancialSupport = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id,
        body = req.body;
      const financialSupport = await this.financialSupport.update(id, body);
      res.status(200).json({ data: financialSupport, message: 'Update Successful' });
    } catch (error) {
      next(error);
    }
  };

  public deleteFinancialSupport = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const financialSupport = await this.financialSupport.delete(id);
      res.status(200).json({ data: financialSupport, message: 'financialSupport deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}

export default FinancialSupportController;
