
// La discografía de un artista consistirá en una colección de discos, donde la información de un disco será:
// Nombre
// Año de publicación

import {Disco} from "./disco";
import {Single} from "./single";


/**
 * Clase que modela el comportamiento de un Disco 
 * en una Biblioteca de Musica
 */
export class Discografia<T extends Disco, U extends Single> {
  /**
   * Conructor de la clase Disco, se usa el constructor simple del lenguaje
   * @param nombre Nombre que identifica al Disco
   * @param temporadaPublicacion Año en el que se lanzó el Disco
   * @param canciones Coleccion de canciones que componen el Disco
   */
  constructor(public discografia: (T | U)[]) {
  }

  /**
   * Metodo encagrado de definir como se desea reprsentar el objeto
   * @returns Retorna el objeto que modela como se debe representar 
   */
  public toString(): object {
    const discos = this.discografia.reduce((acc, elem) => acc + ', ' + elem.toString(), '')
    return {
      Discos: discos
    };
  } 
}