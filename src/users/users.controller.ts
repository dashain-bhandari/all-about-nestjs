import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
constructor(
    private userService:UsersService
){

}
    //get  users/
    @Get()
    findAll(@Query("role") role?: "ADMIN" | "INTERN" | "ENGINEER") {

        return this.userService.findAll(role)
    }
    //users/interns
    @Get("interns")
    findInterns() {
        return this.userService.findAll("INTERN")
    }

    //users/:id
    @Get(":id")
    findUser(@Param("id" ,ParseIntPipe) id: number) {
        return this.userService.findUser(id)
    }


    @Post()

    createUsers(@Body(ValidationPipe) body: CreateUser) {
        return this.userService.createUsers(body)
    }

    @Patch(":id")
    updateUser(@Param("id",ParseIntPipe) id: number, @Body(ValidationPipe) update: UpdateUser) {
        return this.userService.updateUser(id,update);
    }


    @Delete(":id")
    deleteUser(@Param("id",ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }

    //query params
}
