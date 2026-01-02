import { Document } from "mongoose";
export type UserDocument = UserData & Document;
export declare class UserData {
    name: String;
    email: String;
    age: Number;
}
export declare const UserSchema: import("mongoose").Schema<UserData, import("mongoose").Model<UserData, any, any, any, (Document<unknown, any, UserData, any, import("mongoose").DefaultSchemaOptions> & UserData & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, UserData, any, import("mongoose").DefaultSchemaOptions> & UserData & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, UserData>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserData, Document<unknown, {}, UserData, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserData & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<String, UserData, Document<unknown, {}, UserData, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<String, UserData, Document<unknown, {}, UserData, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    age?: import("mongoose").SchemaDefinitionProperty<Number, UserData, Document<unknown, {}, UserData, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserData & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, UserData>;
