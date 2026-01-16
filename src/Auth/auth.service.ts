import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    // test(){} 1
    signup(){
        return {msg: "I have SignedUP"};
    }
    signin(){
        return {msg: "I have SignedIn"};
    }
   
    
}
