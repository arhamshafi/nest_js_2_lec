import { UserData, UserDocument } from './user.schema';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly UserModel;
    constructor(UserModel: Model<UserDocument>);
    getAllUser(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, UserDocument, {}, import("mongoose").DefaultSchemaOptions> & UserData & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, UserDocument, {}, import("mongoose").DefaultSchemaOptions> & UserData & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, UserDocument, "find", {}>;
    createUser(data: any): Promise<string>;
}
