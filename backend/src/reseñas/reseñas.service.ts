import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reseña } from './reseñas.entity';
import { CreateReseñasDto } from './dto/create-reseñas.dto';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ReseñasService {
    constructor(
        @InjectRepository(Reseña)
        private reseñasRepository: Repository<Reseña>,
    ) {}

    async findAll(): Promise<Reseña[]> {
        return this.reseñasRepository.find();
    }

    async create(createReseñasDto: CreateReseñasDto): Promise<Reseña> {
        const reseña = this.reseñasRepository.create(createReseñasDto);
        return this.reseñasRepository.save(reseña);
    }
    

    async remove(id: number): Promise<void>{
        await this.reseñasRepository.delete(id);
    }
}
