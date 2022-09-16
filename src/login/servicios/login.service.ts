import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { login } from '../entities/login.entities';
@Injectable()
export class LoginService {
  constructor(@InjectRepository(login) private loginRepo: Repository<login>) {}
  findAll() {
    return this.loginRepo.query('select * from login');
  }
  async create(body: any) {
    const Login = new login();
    Login.email = body.email;
    Login.u_password = body.pass;
    return this.loginRepo.save(Login);
  }
  findIdType(email: string, u_password: string) {
    console.log(email, u_password);
    return this.loginRepo.query(
      'select * from public.login where email=\'' + 
        email +
        '\' and u_password =\'' +
        u_password +'\'',
    );
  }

}
