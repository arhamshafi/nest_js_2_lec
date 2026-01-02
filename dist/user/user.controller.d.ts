import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./user.schema").UserData & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./user.schema").UserData & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./user.schema").UserDocument, "find", {}>;
    addUser(Body: any): Promise<string>;
}
