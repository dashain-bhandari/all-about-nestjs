import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeeService {
  constructor(private databaseService:DatabaseService){}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
   const emp=this.databaseService.employee.create({data:createEmployeeDto})
   return emp;
  }

  async findAll(role?:"ENGINEER"|"INTERN"|"ADMIN") {
   if(role) return this.databaseService.employee.findMany({
      where:{
        role:role
      }
    })
    return this.databaseService.employee.findMany()
  }

  async findOne(id: number) {
    const user= this.databaseService.employee.findUnique({
      where:{
        id,
      }
    })
    if(!user){
      throw new NotFoundException("User not found")
    }
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where:{id,},
      data:updateEmployeeDto
    })
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where:{id,}
    });
  }
}
