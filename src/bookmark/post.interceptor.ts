import { ExecutionContext, Injectable,NestInterceptor,CallHandler } from "@nestjs/common";
import { Observable } from "rxjs/internal/Observable";
@Injectable()
export class PostInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
        console.log("this is the interceptor");
        return next.handle();
    }
}