import { Injectable } from '@nestjs/common';
import { CreateMedicoInput } from './dto/create-medico.input';
import { UpdateMedicoInput } from './dto/update-medico.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Repository } from 'typeorm';
import { Medico } from './entities/medico.entity';

@Injectable()
export class MedicosService {
  constructor(
    @InjectRepository(Medico)
    private medicoRepository: Repository<Medico>,
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}
  create(createMedicoInput: CreateMedicoInput) {
    const newMedico = this.medicoRepository.create(createMedicoInput);
    return this.medicoRepository.save(newMedico);
  }

  findAll() {
    return this.medicoRepository.find();
  }

  findOne(id: number) {
    return this.medicoRepository.findOneByOrFail({ id: id });
  }

  async getPacientes(medicoId: number) {
    console.log('mid', medicoId);
    const pacientes = await this.pacienteRepository.find({
      where: { medicoId: medicoId },
    });
    console.log(pacientes);
    return pacientes;
  }

  update(id: number, updateMedicoInput: UpdateMedicoInput) {
    return `This action updates a #${id} medico`;
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }
}
