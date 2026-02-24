import { IsString, IsEnum, IsInt, IsBoolean } from 'class-validator';
import { Seniority } from '../entities/user.entity';

export class UserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsEnum(Seniority)
  seniority: Seniority;

  @IsInt()
  yearsOfExperience: number;

  @IsBoolean()
  availability: boolean;
}
