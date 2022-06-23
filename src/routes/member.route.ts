import MemberController from "@/controllers/member.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

class MemberRoute implements Routes {
  public path = '/register';
  public router: Router = Router();
  public member = new MemberController();

  constructor() { 
    this.intializeRoutes();
  }
  
  private intializeRoutes() {
    this.router.get(this.path, this.member.getMembers);
    this.router.get(`${this.path}/:id`, this.member.getMemberById);
    this.router.post(this.path, this.member.createMember);
    this.router.put(`${this.path}/:id`, this.member.updateMember);
    this.router.delete(`${this.path}/:id`, this.member.deleteMember);
  }
}

export default MemberRoute;
