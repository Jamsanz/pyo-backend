import FinancialSupportDto from '@/dtos/financialSupport.dto';
import { HttpException } from '@/exceptions/HttpException';
import IFinancialSupport from '@/interfaces/financialSupport.interface';
import financialSupportModel from '@/models/financialSupport.model';
import { isEmpty } from '@/utils/util';

class FinancialSupportService {
  public financialSupport = financialSupportModel;

  public async findAll(): Promise<IFinancialSupport[]> {
    return await this.financialSupport.find();
  }

  public async findById(id: string): Promise<IFinancialSupport> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.financialSupport.findById(id);
  }

  public async create(data: FinancialSupportDto): Promise<IFinancialSupport> {
    if (isEmpty(data)) throw new HttpException(400, 'Bad request');
    const findSponsor = await this.financialSupport.findOne({ email: data.email });
    if (findSponsor) throw new HttpException(409, 'Support request already submitted');
    return await this.financialSupport.create(data);
  }

  public async update(id: string, data: FinancialSupportDto): Promise<IFinancialSupport> {
    if (isEmpty(id) || isEmpty(data)) throw new HttpException(400, 'Bad request');
    await this.financialSupport.findByIdAndUpdate(id, data);
    return this.findById(id);
  }

  public async delete(id: string): Promise<IFinancialSupport> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.financialSupport.findByIdAndDelete(id);
  }
}

export default FinancialSupportService;
