import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAll(role?: "ADMIN" | "INTERN" | "ENGINEER") {
        if (role) {
            const users= this.users.filter((item) => {
                return item.role == role
            })
           if(users.length==0){
            throw new NotFoundException("User with role does not exist")
           }
           return users;
        }
        return this.users;
    }

    findUser(id: number) {

        const user = this.users.find((item) => item.id == id)
        if (!user) {
            throw new NotFoundException("User not found")
        }
        return user
    }

    createUsers(user: CreateUser) {
        const sortedUsers = this.users.sort((a, b) => { return b.id - a.id })
        this.users.push({
            ...user, id: sortedUsers[0].id + 1
        });
        return this.findUser(sortedUsers[0].id + 1)
    }

    updateUser(id: number, props:
        UpdateUser
    ) {
        this.users = this.users.map((item) => {
            if (item.id == id) {
                return {
                    ...item, ...props
                }
            }
            else {
                return item;
            }
        })

        return this.findUser(id)
    }

    deleteUser(id: number) {

        this.users = this.users.filter((item) => item.id !== id);
        return this.findUser(id)
    }
}
