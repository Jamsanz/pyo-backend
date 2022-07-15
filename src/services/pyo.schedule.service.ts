import PyoSchedule from 'interfaces/pyo.schedule.interface';
import { isEmpty } from '@/utils/util';
import pyoScheduleModel from '@/models/pyo.schedule.model';
import { HttpException } from '@/exceptions/HttpException';
import PyoScheduleDto from '@/dtos/pyo.schedule.dto';

class PyoScheduleService {
  public schedule = pyoScheduleModel;

  public async findAll(): Promise<PyoSchedule[]> {
    return await this.schedule.find();
  }

  public async findPyoScheduleById(id: string): Promise<PyoSchedule> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request id required');
    return await this.schedule.findById(id);
  }

  public async createPyoSchedule(data: PyoScheduleDto): Promise<PyoSchedule> {
    if (isEmpty(data)) throw new HttpException(400, 'Bad request');
    return await this.schedule.create(data);
  }

  public async updatePyoSchedule(id: string, data: PyoScheduleDto): Promise<PyoSchedule> {
    if (isEmpty(data) || isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.schedule.findByIdAndUpdate(id, data);
  }

  public async deletePyoSchedule(id: string): Promise<PyoSchedule> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request id required');
    return await this.schedule.findByIdAndDelete(id);
  }
}

export default PyoScheduleService;
