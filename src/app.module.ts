import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppService } from './app.service';
import { ProviderModule } from './provider/provider.module';
import { UsersModule } from './users/users.module';
import { logosModule } from './logos/logos.module';
import { TokensModule } from './tokens/tokens.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    MongooseModule.forRoot(process.env.DB_URI),
    ProviderModule, 
    UsersModule, 
    logosModule, 
    TokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
