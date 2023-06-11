import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePacienteInput } from './dto/create-paciente.input';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}

  create(createPacienteInput: CreatePacienteInput) {
    const newPaciente = this.pacientesRepository.create(createPacienteInput);
    return this.pacientesRepository.save(newPaciente);
  }

  findOne(id: number) {
    return this.pacientesRepository.findOneByOrFail({ id: id });
  }

  findAll() {
    return this.pacientesRepository.find();
  }
}
