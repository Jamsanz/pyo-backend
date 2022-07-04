import Schedule from "interfaces/schedule.interface";
import { isEmpty } from "utils/util";
import scheduleModel from "models/schedule.model";
import { HttpException } from "exceptions/HttpException";
import ScheduleDto from "@/dtos/schedule.dto";

class ScheduleService{
  public schedule = scheduleModel;

  public async findAll(): Promise<Schedule[]> {
    return await this.schedule.find();
  }

  public async findScheduleById(id: string): Promise<Schedule> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request id required');
    return await this.schedule.findById(id);
  }
  
  public async createSchedule(data: ScheduleDto): Promise<Schedule> {
    if (isEmpty(data)) throw new HttpException(400, 'Bad request');
    return await this.schedule.create(data);
  }
  
  public async updateSchedule(id: string, data: ScheduleDto): Promise<Schedule> {
    if (isEmpty(data) || isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.schedule.findByIdAndUpdate(id, data);
  }
  
  public async deleteSchedule(id: string): Promise<Schedule>{
    if (isEmpty(id)) throw new HttpException(400, 'Bad request id required');
    return await this.schedule.findByIdAndDelete(id);
  }

}

export default ScheduleService;
