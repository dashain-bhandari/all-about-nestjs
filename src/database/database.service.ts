import { Injectable } from '@nestjs/common';
import {  OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
   async onModuleInit() {
      await this.$connect()
      }
}
