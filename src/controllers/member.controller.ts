import MemberDto from "@/dtos/member.dto";
import MemberService from "@/services/member.service";
import { NextFunction, Request, Response } from "express";

class MemberController {
  public member = new MemberService();

  public getMembers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const members = await this.member.findAll();
      res.status(200).json({ data: members, message: 'Found all members' });
    } catch (error) {
      next(error);
    }
  };

  public getMemberById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const member = await this.member.findMemberById(id);
      res.status(200).json({ data: member, message: 'member found' });
    } catch (error) {
      next(error);
    }
  };
  
  public createMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: MemberDto = req.body;
      const member = await this.member.createMember(data);
      res.status(201).json({ data: member, message: 'Registration successful' });
    } catch (error) {
      next(error);
    }
  };
  
  public updateMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: MemberDto = req.body, id = req.params.id;
      const member = await this.member.updateMember(id, data);
      res.status(201).json({ data: member, message: 'User updated sucessfully' });
    } catch (error) {
      next(error);
    }
  };

  public deleteMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const member = await this.member.deleteMember(id);
      res.status(200).json({ data: member, message: 'Member deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}

export default MemberController;
