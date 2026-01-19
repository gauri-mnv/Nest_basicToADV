import{CanActivate, ExecutionContext, Injectable} from '@nestjs/common';

@Injectable()
export class BookmarkGuard implements CanActivate{
    canActivate(context:ExecutionContext):boolean{
        console.log("this is the Bookmark Gaurd");
        return true;
    }
}
