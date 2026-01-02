import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findAll(): Promise<any> {
        return await this.userService.getAllUser()
    }
    @Post()
    async addUser(@Body() Body: any): Promise<string> {
        const message = await this.userService.createUser(Body)
        return message
    }
    @Delete()
    async remove(@Body("id") id: String): Promise<string> {
        const message = await this.userService.del(id)
        return message
    }



}
