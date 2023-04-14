import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApiTokenPaymentException } from 'src/common/exceptions/api-token-payment.exceptions';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] !== 'my-token') {
      throw new ApiTokenPaymentException();
    }
    console.log(req.headers);
    next();
  }
}
