import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log('log');
    this.logger.error('error');
    this.logger.debug('debug');
    this.logger.warn('warn');
    this.logger.verbose('verbose');
    return this.appService.getHello();
  }
}
