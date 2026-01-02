import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserData, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserData.name, schema: UserSchema }
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
