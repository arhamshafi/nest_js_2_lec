import { UserDocument } from './user.schema';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly UserModel;
    constructor(UserModel: Model<UserDocument>);
    getAllUser(): Promise<any>;
    createUser(data: any): Promise<string>;
    del(id: String): Promise<string>;
}
