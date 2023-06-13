import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { FindOptionsWhere } from 'typeorm';
import { Medico } from '../entities/medico.entity';

@InputType()
export class FindMedicoQuery implements FindOptionsWhere<Medico> {

  @Field({nullable:true})
  nombre?: string;

  @Field({nullable:true})
  centro?: string;
}