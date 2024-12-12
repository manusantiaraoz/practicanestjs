import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { envValidationSchema } from 'src/config/env-validation';
import { ProfileModule } from '../profile/profile.module';


//no olvidar que aqui se tiene que importar los modulos que vamos a utilizar, gunto con UserModule
@Module({
  imports: [
    ProfileModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      validationSchema: envValidationSchema,
    }),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
