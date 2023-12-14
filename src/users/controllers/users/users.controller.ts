import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/DTOs/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';



@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.fetchUsers()
    }



    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData)
        return this.userService.createUsers(userData)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        // console.log(id)
        // console.log(typeof (id))
        return this.userService.fetchUsersById(id)

    }

}

