import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = UserData & Document

@Schema({ timestamps: true })
export class UserData {
    @Prop({ required: true })
    name: String
    @Prop({ required: true, unique: true })
    email: String
    @Prop({ required: true })
    age: Number
}

export const UserSchema = SchemaFactory.createForClass(UserData)