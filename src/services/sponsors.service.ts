import SponsorsDto from "@/dtos/sponsors.dto";
import { HttpException } from "@/exceptions/HttpException";
import ISponsor from "@/interfaces/sponsor.interface";
import sponsorsModel from "@/models/sponsors.model";
import { isEmpty } from "@/utils/util";

class SponsorsService {
  public sponsors = sponsorsModel;

  public async findAll(): Promise<ISponsor[]> {
    return await this.sponsors.find();
  }

  public async findById(id: string): Promise<ISponsor> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.sponsors.findById(id);
  }

  public async create(data: SponsorsDto): Promise<ISponsor> {
    if (isEmpty(data)) throw new HttpException(400, "Bad request");
    const findSponsor = await this.sponsors.findOne({ email: data.email });
    if (findSponsor) throw new HttpException(409, "Sponsor already exist");
    return await this.sponsors.create(data);
  }

  public async update(id: string, data: SponsorsDto): Promise<ISponsor> {
    if (isEmpty(id) || isEmpty(data)) throw new HttpException(400, 'Bad request');
    await this.sponsors.findByIdAndUpdate(id, data);
    return this.findById(id);
  }

  public async delete(id: string): Promise<ISponsor> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.sponsors.findByIdAndDelete(id);
  }
}

export default SponsorsService;
