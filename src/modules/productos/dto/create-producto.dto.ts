import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateProductoDto {
  @IsString({ message: 'El nombre debe ser una cadena' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacio' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @MaxLength(50, { message: 'El nombre no puede exceder los 50 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'El precio no puede estar vacio' })
  @IsNumber({})
  precio: number;

  @IsNotEmpty({ message: 'El precio no puede estar vacio' })
  @IsNumber({})
  cantidad: number;

  @IsString({ message: 'el campo descripcion debe ser de tipo string' })
  @IsNotEmpty({ message: 'descripcion no puede estar vacio' })
  @MinLength(10, {
    message: 'La descripcion debe tener al menos 10 caracteres',
  })
  @MaxLength(100, {
    message: 'La dirección no puede exceder los 100 caracteres',
  })
  description: string;
}

export class UpdateProduct extends PartialType(CreateProductoDto) {}
