import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { SharedModule } from 'src/shared/shared.module';

config()
@Module({
    imports: [SharedModule],
    controllers: [UserController],
    providers: [UserService],
    
})
export class UserModule {}