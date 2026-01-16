import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
  } from '@nestjs/common';
  

  //Exception filters centralize and standardize error responses across the application.
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const status = exception.getStatus();
  
      response.status(status).json({
        success: false,
        statusCode: status,
        message: exception.message,
        timestamp: new Date().toISOString(),
      });
    }
  }
  