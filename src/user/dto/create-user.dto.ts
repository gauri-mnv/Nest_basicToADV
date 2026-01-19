import { IsString, IsEmail, MinLength } from 'class-validator';

// class-validator pass the data after validating it
// Validation ensures incoming requests match the DTO contract before execution
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
