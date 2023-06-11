import { Module } from '@nestjs/common';
import { PacientesResolver } from './pacientes.resolver';
import { PacientesService } from './pacientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  providers: [PacientesResolver, PacientesService],
})
export class PacientesModule {}
