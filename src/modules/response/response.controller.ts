import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { event } from 'src/common/constants/event.constant';

@ApiTags('Response')
@Controller('response')
export class ResponseController {
  constructor(private eventEmitter: EventEmitter2) {}
  @Post()
  async handleResponseQuestion() {
    console.log('___Before emit');
    this.eventEmitter.emit(event.RESPONSE_SUBMITTED, {
      userId: 1,
      optionId: 4,
    });
    console.log('___Event emitted');
    return { message: 'Response taken' };
  }
}
