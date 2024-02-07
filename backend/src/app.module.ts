import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { Handler } from "./utils/handler";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { User, UserSchema } from './model/user.schema';

@Module({
  imports: [
     MongooseModule.forRoot('mongodb+srv://basilfaheem25:AfR5H4g5NWl9uRlV@cluster0.ta4dstn.mongodb.net/Test?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),

     MulterModule.register({
       storage: diskStorage({
         destination: './public',
         filename: (req, file, cb) => {
           const ext = file.mimetype.split('/')[1];
           cb(null, `${uuidv4()}-${Date.now()}.${ext}`);
         },
       })
     }),
     JwtModule.register({
      secret,
      signOptions: { expiresIn: '8h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
 
controllers: [AppController, UserController],
providers: [AppService, UserService,Handler],
})

export class AppModule {
  
}
