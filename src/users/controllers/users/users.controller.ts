import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/DTOs/CreateUser.dto';



@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return " get the user "
    }


    @Post('create')
    createUser(@Body() userData: CreateUserDto) {
        return userData
    }

}

