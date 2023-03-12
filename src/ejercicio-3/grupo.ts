import { Artista } from "./artista";
import { Disco } from "./disco";
import { Discografia } from "./discografia";
import { Single } from "./single";

/**
 * Clase Solista, esta implementa la Interfaz Artista que le permite
 * definir las propiedades mínimas para definri un artista, gracias 
 * a esta clase se puede modelas el comportamiento que debe tener 
 * un solista musical 
 */
export class Grupo implements Artista {
  /**
   * Constructor de la clase Solista, se apoya del contructor simple que
   * proporciona TypeScript
   * @param nombre Nombre que recibe el Grupo
   * @param numOyentesMensuales Numero de oyentes mensuales del grupo
   * @param discografia Coleccion de discos o singles del grupo
   */
  constructor(public nombre: string, 
              public numOyentesMensuales: number, 
              public discografia: Discografia<Disco, Single>) {
  }

  /**
   * Metodo encagrado de definir como se desea reprsentar el objeto
   * @returns retorna el objeto que modela como se debe definir como se desea reprsentar el objeto
   */
  public toString(): object {
    const discos = this.discografia.toString()
    return {
      Nombre: this.nombre, 
      NumOyetes: this.numOyentesMensuales,
      Discografia: discos
    };
  } 
}