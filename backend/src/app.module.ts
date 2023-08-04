import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reseña } from './reseñas/reseñas.entity';
import { ReseñasModule } from './reseñas/reseñas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'reseñas',
      entities: [Reseña],
      synchronize: true,
    }),
    ReseñasModule,
  ],
})
export class AppModule {}
