import MemberDto from "@/dtos/member.dto";
import { HttpException } from "@/exceptions/HttpException";
import { IMember } from "@/interfaces/users.interface";
import memberModel from "@/models/member.model";
import { isEmpty } from "@/utils/util";

class MemberService {
  public member = memberModel;

  public async findAll(): Promise<IMember[]>{
    return await this.member.find();
  }

  public async findMemberById(id: string): Promise<IMember> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.member.findById(id);
  }

  public async findMemberByEmail(email: string): Promise<IMember> {
    if (isEmpty(email)) throw new HttpException(400, 'Bad request');
    return await this.member.findOne({ email });
  }
  
  public async createMember(member: MemberDto): Promise<IMember> {
    if (isEmpty(member)) throw new HttpException(400, 'Bad request');
    const findMember = this.member.find({ email: member.email });
    if ((await findMember).length > 0) throw new HttpException(409, 'This email already exists');
    return await this.member.create(member);
  }

  public async updateMember(id: string, member: MemberDto): Promise<IMember> {
    if (isEmpty(id) || isEmpty(member)) throw new HttpException(400, 'Bad request');
    return await this.member.findByIdAndUpdate(id, member);
  }
  public async deleteMember(id: string): Promise<IMember> {
    if (isEmpty(id)) throw new HttpException(400, 'Bad request');
    return await this.member.findByIdAndDelete(id);
  }
}

export default MemberService;
