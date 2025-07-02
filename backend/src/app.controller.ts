import { Controller, Get } from '@nestjs/common';
import { uptime } from 'process';

@Controller()
export class AppController {
  constructor() {}

  @Get('health')
  getHealth() {
    return {
      uptimeInSeconds: process.uptime().toFixed(2).concat('s'),
      msg: 'Service Healthy - Backend MOTZ',
    };
  }
}
