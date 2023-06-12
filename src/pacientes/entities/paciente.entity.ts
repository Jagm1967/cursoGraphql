import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Medico } from 'src/medicos/entities/medico.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Paciente {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  nombre: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  direccion?: string;

  @Column()
  @Field()
  medicoId: number;

  @ManyToOne(() => Medico, (medico) => medico.pacientes)
  @Field(() => Medico)
  medico: Medico;
}
