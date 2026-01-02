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

    getAllUser() {
        return this.UserModel.find()
    }
    async createUser(data: any): Promise<string> {
        await this.UserModel.create(data)
        return "successfully Added"
    }

}
