import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolaMundoModule } from './hola-mundo/hola-mundo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PacientesModule } from './pacientes/pacientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './datos',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    HolaMundoModule,
    PacientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
