
import {Cancion} from "./cancion";

/**
 * Clase que modela el comportamiento de un Disco 
 * en una Biblioteca de Musica
 */
export class Disco {
  /**
   * Conructor de la clase Disco, se usa el constructor simple del lenguaje
   * @param nombre Nombre que identifica al Disco
   * @param temporadaPublicacion Año en el que se lanzó el Disco
   * @param canciones Coleccion de canciones que componen el Disco
   */
  constructor(public nombre: string,
              public temporadaPublicacion: number, 
              public canciones: Cancion[]) {
  }

  /**
   * Metodo encagrado de definir como se desea reprsentar el objeto
   * @returns Retorna el objeto que modela como se debe representar 
   */
  public toString(): object {
    const canciones = this.canciones.reduce((acc, elem) => acc + ', ' + elem.toString(), '')
    return {
      Nombre: this.nombre, 
      NumOyetes: this.temporadaPublicacion,
      Discografia: canciones
    };
  } 
}