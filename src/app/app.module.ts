import { Module } from '@nestjs/common';

import { SchedulesModule } from '../schedules/schedules.module';

@Module({
  imports: [SchedulesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
