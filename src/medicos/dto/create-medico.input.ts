import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicoInput {
  @Field()
  nombre: string;

  @Field()
  centro: string;
}
