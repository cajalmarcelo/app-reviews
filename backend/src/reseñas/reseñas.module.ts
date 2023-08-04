// reviews.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReseñasController } from './reseñas.controller';
import { ReseñasService } from './reseñas.service'; // Asegúrate de importar el servicio ReviewsService
import { Reseña } from './reseñas.entity'; // Asegúrate de importar la entidad Review

@Module({
  imports: [TypeOrmModule.forFeature([Reseña])], // Importa la entidad aquí para que esté disponible en el servicio
  controllers: [ReseñasController],
  providers: [ReseñasService], // Agrega el servicio aquí
})
export class ReseñasModule {}
