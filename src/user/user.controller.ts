import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll() {
        return this.userService.getAllUser()
    }
    @Post()
    async addUser(@Body() Body: any): Promise<string> {
        const message = await this.userService.createUser(Body)
        return message
    }



}
