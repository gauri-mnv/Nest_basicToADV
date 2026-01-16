import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth') //global prefix
export class AuthController {
    constructor(private authService: AuthService) {
            // this.authService.test();//dependancy injection initialization
       
    }
//     POST/auth/signUP
    @Post('signup')
    signup(){
       // return "I am Signed UP"; //no need to worry about sending the right data type  
    //    return {msg: "I am Signed UP"};
     return this.authService.signup();
    }

    //     POST/auth/signin

    @Post('signin')
    signin(){
        // return "I am Sign In";
       return this.authService.signin();
    }
}