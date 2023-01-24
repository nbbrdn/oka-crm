import { Controller, Get } from '@nestjs/common';
import { AppService, Account } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAccounts(): Account[] {
    return this.appService.getAccounts();
  }
}
