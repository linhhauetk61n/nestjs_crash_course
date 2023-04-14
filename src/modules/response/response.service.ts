import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { event } from 'src/common/constants/event.constant';

@Injectable()
export class ResponseService {
  @OnEvent(event.RESPONSE_SUBMITTED)
  handleIfResponseIsCorrect(payload) {
    console.log('RESPONSE_SERVICE', payload);
  }
}
