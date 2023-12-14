import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utiles/types';

@Injectable()
export class UsersService {

    private fakeUsers = [
        { username: "hamzah", email: "hamzah@gmail.com" },
        { username: "odai", email: "odai@gmail.com" },
        { username: "mai", email: "mai@gmail.com" },
    ]
    fetchUsers() {
        return this.fakeUsers
    }

    createUsers(userDetails: CreateUserType) {
        console.log(userDetails)
        return this.fakeUsers.push(userDetails)


    }

    fetchUsersById(id: number) {
        return { id, username: "hamzah", email: "hamzah@gmail.com" }
    }


}
