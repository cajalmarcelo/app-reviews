//Creacion del modelo para la base de datos

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reseña {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    puntuacion: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;
}