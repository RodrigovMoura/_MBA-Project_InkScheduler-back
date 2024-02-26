import { Controller, Post, Body } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ScheduleByRangeDto } from './dto/create-schedule.dto';
import {} from './dto/update-schedule.dto';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post('/create-schedule')
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto);
  }

  @Post('/schedules-by-range')
  findAll(@Body() ScheduleByRange: ScheduleByRangeDto) {
    return this.schedulesService.findByRange(ScheduleByRange);
  }
}
