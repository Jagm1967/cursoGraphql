import { Module } from '@nestjs/common';
import { PacientesResolver } from './pacientes.resolver';
import { PacientesService } from './pacientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { MedicosModule } from 'src/medicos/medicos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente]), MedicosModule],
  providers: [PacientesResolver, PacientesService],
})
export class PacientesModule {}
