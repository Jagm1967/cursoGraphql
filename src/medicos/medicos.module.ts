import { Module } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosResolver } from './medicos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medico, Paciente])],
  providers: [MedicosResolver, MedicosService],
  exports: [MedicosService],
})
export class MedicosModule {}
