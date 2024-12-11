import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
export class CreateProfileDto {
  @IsString({ message: 'lo escrito en la biografia debe ser String' })
  @IsNotEmpty({ message: 'no se puede enviar el campo vacio' })
  biography: string;

  @IsString({ message: 'campo obligatorio' })
  @IsNotEmpty({ message: 'no puedes enviar campo vacio' })
  @IsUUID()
  userId: string;
}
export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
