import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCatDTO implements Readonly<CreateCatDTO> {
  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(170)
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(80)
  color: string;
}