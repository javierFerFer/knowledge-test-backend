import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Seniority {
  JUNIOR = 'junior',
  SENIOR = 'senior',
}

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ type: 'enum', enum: Seniority })
  seniority: Seniority;

  @Column({ type: 'int' })
  yearsOfExperience: number;

  @Column({ type: 'boolean', default: false })
  availability: boolean;
}
