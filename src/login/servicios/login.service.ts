import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { login } from '../entities/login.entities';
@Injectable()
export class LoginService {
  constructor(@InjectRepository(login) private loginRepo: Repository<login>) {}
  findAll() {
    return this.loginRepo.find();
  }
  async create(body: any) {
    const Login = new login();
    Login.email = body.email;
    Login.pass = body.pass;
    return this.loginRepo.save(Login);
  }
}
