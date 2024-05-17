import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './provider/provider.module';
import { UsersModule } from './users/users.module';
import { LogosModule } from './logos/logos.module';
import { TokensModule } from './tokens/tokens.module';

@Module({
  imports: [ProviderModule, UsersModule, LogosModule, TokensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
