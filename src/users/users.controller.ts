import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    //get  users/
    @Get()
findAll(@Query("role") role:"admin"|"user",@Query("hey") hey:string){
    
return {role,hey}
}
//users/interns
@Get("interns")
findInterns(){
    return []
}

//users/:id
@Get(":id")
findUser(@Param("id") id:string){
return {id}
}


@Post()
createUsers(@Body() body:{}){
return body
}

@Patch(":id")
updateUser(@Param("id") id:string, @Body() update:{}){
return {id,...update}
}


@Delete(":id")
deleteUser(@Param("id") id:string){
return {id}
}

//query params
}
