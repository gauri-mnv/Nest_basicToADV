import{CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
//basic understanding of guard which Request
import {Request} from "express";


@Injectable()
export class UserGaurd implements CanActivate{

    // private readonly key:string="Our_Secret_Key";

    public username: string ="user";
    public password : string ="user@123";

    canActivate(context:ExecutionContext): boolean{

        // console.log("this is the ARequest

        const ctx= context.switchToHttp();
        const request=ctx.getRequest<Request>();

        // const apiKey = request.headers['key']; 
        // if (!apiKey) {
        //   return false;
        // }
        // return apiKey === this.key;

        const username = request.headers['username'] ;
        const password = request.headers['password'];

        if (!username || !password) {
          return false;
        }
        return (
            
            username=== this.username &&
            password ===this.password
            ) ;
        // if(request.header(name:"key")==undefined)return false;
        // return request.header(name:"key")==this.key;
        // return true;
        // return false; 
        //if we are doing this as false no request can pass through and no data will be visible for the users

    }
}
