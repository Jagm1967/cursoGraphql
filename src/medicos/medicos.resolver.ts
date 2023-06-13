import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { MedicosService } from './medicos.service';
import { Medico } from './entities/medico.entity';
import { CreateMedicoInput } from './dto/create-medico.input';
import { UpdateMedicoInput } from './dto/update-medico.input';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { FindMedicoQuery } from './dto/find-medico.query';

@Resolver(() => Medico)
export class MedicosResolver {
  constructor(private readonly medicosService: MedicosService) {}

  @Mutation(() => Medico)
  createMedico(
    @Args('createMedicoInput') createMedicoInput: CreateMedicoInput,
  ) {
    return this.medicosService.create(createMedicoInput);
  }

  @Query(() => [Medico], { name: 'medicos' })
  findAll(@Args('findMedico',{nullable:true}) findMedicoQuery:FindMedicoQuery={}) {
    return this.medicosService.findAll(findMedicoQuery);
  }

  @Query(() => Medico, { name: 'medico' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medicosService.findOne(id);
  }

  @ResolveField(() => [Paciente])
  pacientes(@Parent() medico: Medico) {
    return this.medicosService.getPacientes(medico.id);
  }
}
