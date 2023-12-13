import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return { id }

    }

}

