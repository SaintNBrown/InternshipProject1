import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { infoModule } from './info/info.modules';

@Module({
  imports: [infoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
