import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Paciente } from './entities/paciente.entity';
import { PacientesService } from './pacientes.service';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { Medico } from 'src/medicos/entities/medico.entity';
import { FindManyOptions } from 'typeorm';

@Resolver(() => Paciente)
export class PacientesResolver {
  constructor(private readonly pacientesService: PacientesService) {}

  @Query(() => [Paciente], { name: 'pacientes' })
  findAll() {
    return this.pacientesService.findAll();
  }

  @Query(() => Paciente, { name: 'paciente' })
  findOne(@Args('pacienteID', { type: () => Int }) id: number) {
    return this.pacientesService.findOne(id);
  }

  @Mutation(() => Paciente)
  creaPaciente(
    @Args('createPacienteInput') createPacienteInput: CreatePacienteInput,
  ) {
    return this.pacientesService.create(createPacienteInput);
  }

  @ResolveField(() => Medico)
  medico(@Parent() paciente: Paciente) {
    return this.pacientesService.getMedico(paciente.medicoId);
  }
}
