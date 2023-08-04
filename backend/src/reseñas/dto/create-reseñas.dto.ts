
import { IsInt, Min, Max, IsString, Length } from 'class-validator';

export class CreateReseñasDto {
  @IsInt()
  @Min(0)
  @Max(5)
  puntuacion: number;

  @IsString()
  @Length(1, 100)
  titulo: string;

  @IsString()
  @Length(1, 800)
  descripcion: string;
}
