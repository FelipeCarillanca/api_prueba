import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'api',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
