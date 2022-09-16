import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginService } from '../servicios/login.service';

@Controller('api/login')
export class LoginController {
  constructor(private loginServicio: LoginService) {}
  @Get(':email/:u_password')
  getfindid(
    @Param('email') email: string,
    @Param('u_password') u_password: string,
  ) {
    return this.loginServicio.findIdType(email, u_password);
  }
  @Post()
  create(@Body() body: any) {
    return this.loginServicio.create(body);
  }
}
