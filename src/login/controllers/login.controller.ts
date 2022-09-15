import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginService } from '../servicios/login.service';

@Controller('api/login')
export class LoginController {
  constructor(private loginServicio: LoginService) {}
  @Get()
  getAll() {
    return this.loginServicio.findAll();
  }
  @Post()
  create(@Body() body: any) {
    return this.loginServicio.create(body);
  }
}
