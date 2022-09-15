import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './servicios/login.service';
import { LoginController } from './controllers/login.controller';
import { login } from './entities/login.entities';

@Module({
  imports: [TypeOrmModule.forFeature([login])],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
