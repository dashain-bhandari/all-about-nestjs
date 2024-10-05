import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUser{
    @IsNumber()
    id:number

    @IsString()
    @IsNotEmpty()
    name:string

    @IsEnum(["INTERN","ENGINEER","ADMIN"],{
        message:"Valid role required"
    })
    role:"INTERN"|"ENGINEER"|"ADMIN"

    @IsEmail()
    email:string
}

