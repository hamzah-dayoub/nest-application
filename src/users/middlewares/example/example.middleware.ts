import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("middleware example")
    console.log(req.headers.authorization)
    const { authorization } = req.headers
    if (!authorization) throw new HttpException('NO Authorization token', HttpStatus.FORBIDDEN)
    if (authorization === 'hamzah') next();
    else throw new HttpException('Invalid Authorization token', HttpStatus.FORBIDDEN)
  }
}
