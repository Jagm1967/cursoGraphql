import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Medico {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field()
  nombre: string;

  @Column()
  @Field({ nullable: true })
  centro: string;

  @OneToMany(() => Paciente, (paciente) => paciente.medico)
  @Field(() => [Paciente], { nullable: true })
  pacientes: Paciente[];
}
