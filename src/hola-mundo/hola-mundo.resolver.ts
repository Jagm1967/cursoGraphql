import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HolaMundoResolver {
  @Query(() => String)
  holaMundo(): string {
    return 'Hola Mundo';
  }

  @Query(() => Int, {
    name: 'numeroAleatorio',
    description:
      'Genera un numero aleatorio con el argumento hasta, por defecto 10',
  })
  getNumeroAeatorio(
    @Args('hasta', { nullable: true, type: () => Int }) hasta = 10,
  ) {
    return Math.floor(Math.random() * hasta);
  }
}
