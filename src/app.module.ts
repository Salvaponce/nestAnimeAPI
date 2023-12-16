import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimesController } from './animes/animes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimesService } from './animes/animes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Obama69',
      database: 'animesApp',
      entities: ['Animes'],
      synchronize: true
    })
  ],
  controllers: [AppController, AnimesController],
  providers: [AppService, AnimesService],
})
export class AppModule {}
