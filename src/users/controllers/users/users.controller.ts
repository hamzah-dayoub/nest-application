import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/DTOs/CreateUser.dto';



@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortdesc', ParseBoolPipe) sortdesc: boolean) {
        return " get the user "
    }



    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        return userData
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        console.log(typeof (id))
        return { id }

    }

}

