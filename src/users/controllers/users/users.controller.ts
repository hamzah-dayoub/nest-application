import { Controller, Get, Post } from '@nestjs/common';



@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return " get the user "
    }


    @Post()
    createUser() {
        return " Set the user "
    }

}

