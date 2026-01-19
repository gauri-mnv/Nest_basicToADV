import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';


@Controller('auth') //global prefix
export class AuthController {
    constructor(private readonly authService: AuthService) {
            // this.authService.test();//dependancy injection initialization
       
    }
//     POST/auth/signUP
    @Post('signup')
    signup( @Body() dto: SignupDto,){
       // return "I am Signed UP"; //no need to worry about sending the right data type  
    //    return {msg: "I am Signed UP"};
    return this.authService.signup(dto);
  
    }

    //     POST/auth/signin

    @Post('signin')
    signin(@Body() dto: SigninDto){
        // return "I am Sign In";
        return this.authService.signin(dto);
    //    return this.authService.signin(body.email, body.password);
    }
}