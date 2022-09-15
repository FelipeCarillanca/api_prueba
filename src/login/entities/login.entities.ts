import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class login {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  pass: string;
}
