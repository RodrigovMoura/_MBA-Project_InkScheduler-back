export class CreateScheduleDto {
  name: string;
  email: string;
  dates: Date[];
}

export class ScheduleByRangeDto {
  email: string;
  from: Date;
  to: Date;
}
