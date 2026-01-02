import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserData, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(UserData.name)
        private readonly UserModel: Model<UserDocument>
    ) { }

    async getAllUser(): Promise<any> {
        const users = await this.UserModel.find()
        return users
    }
    async createUser(data: any): Promise<string> {
        await this.UserModel.create(data)
        return "successfully Added"
    }
    async del(id: String): Promise<string> {
        await this.UserModel.findByIdAndDelete(id)
        return "Successfully Deleted"
    }

}
