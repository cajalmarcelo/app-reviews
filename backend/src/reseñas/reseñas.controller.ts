import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReseñasService } from './reseñas.service';
import { CreateReseñasDto } from './dto/create-reseñas.dto';
import { Reseña } from './reseñas.entity';

@Controller('review')
export class ReseñasController {
  constructor(private readonly ReseñasService: ReseñasService) {}

  @Get()
  findAll() {
    return this.ReseñasService.findAll();
  }

  @Post()
  async create(@Body() createReseñasDto: CreateReseñasDto): Promise<Reseña> {
    return this.ReseñasService.create(createReseñasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ReseñasService.remove(id);
  }


}
