import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePacienteInput {
  @Field()
  nombre: string;

  @Field({ nullable: true })
  direccion?: string;
}
