import{CanActivate, ExecutionContext, Injectable,
  UnauthorizedException,} from '@nestjs/common';
//basic understanding of guard which Request
import {Request} from "express";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private jwtService: JwtService) {}

    // private readonly key:string="Our_Secret_Key"; 1
    canActivate(context:ExecutionContext): boolean{

        // console.log("this is the ARequest

        const ctx= context.switchToHttp();
        const request=ctx.getRequest<Request>();

        // const apiKey = request.headers['key']; 1
        // if (!apiKey) {
        //   return false;
        // }
        // return apiKey === this.key;


        const authHeader = request.headers.authorization;
        if (!authHeader) {
          throw new UnauthorizedException('Token missing');
        }
           // Expecting: Authorization: Bearer <token>
    const token = authHeader.split(' ')[1];
    try {
      const payload = this.jwtService.verify(token);
      // attach user info to request
      request['user'] = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
      
        
        // if(request.header(name:"key")==undefined)return false;
        // return request.header(name:"key")==this.key;
        // return true;
        // return false; 
        //if we are doing this as false no request can pass through and no data will be visible for the users

    }
}
