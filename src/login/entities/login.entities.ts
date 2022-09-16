import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class login {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'u_id',
  })
  u_id: number;
  @Column('varchar', { nullable: true, name: 'email' })
  email: string;
  @Column('varchar', { nullable: true, name: 'u_password' })
  u_password: string;
}
