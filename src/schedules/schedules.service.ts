import { HttpException, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SchedulesService {
  async create(createScheduleDto: CreateScheduleDto) {
    let userId = 0;

    const previousUserId = await prisma.user.findUnique({
      where: { email: createScheduleDto[0].email },
    });

    if (!previousUserId || !previousUserId.id) {
      const newUser = await prisma.user.create({
        data: {
          email: createScheduleDto[0].email,
          name: createScheduleDto[0].name,
        },
      });
      userId = newUser.id;
    } else {
      userId = previousUserId.id;
    }

    const createdItens = [];

    for (const date of createScheduleDto[0].dates) {
      const newSchedule = await prisma.appointment.create({
        data: {
          userId,
          date: date,
          isConfirmed: false,
        },
      });

      createdItens.push(newSchedule);
    }

    if (
      createdItens.length === createScheduleDto[0].dates.length &&
      createdItens.every((item) => item.id)
    ) {
      return {
        message: 'Schedules created successfully',
        schedules: createdItens,
      };
    } else {
      throw new HttpException('Schedules not created', 500);
    }
  }

  findAll() {
    return `This action returns all schedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}