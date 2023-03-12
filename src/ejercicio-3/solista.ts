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
export class Solista implements Artista {
  /**
   * Constructor de la clase Solista, se apoya del contructor simple que
   * proporciona TypeScript
   * @param nombre Nombre que recibe el solista
   * @param numOyentesMensuales Numero de oyentes mensuales del solista
   * @param discografia Coleccion de discos o singles del solista
   */
  constructor(public nombre: string, 
              public numOyentesMensuales: number, 
              public discografia: Discografia<Disco, Single>) {
  }
  
  /**
   * Metodo encagrado de definir como se desea reprsentar el objeto
   * @returns Retorna el objeto que define como se desea representar el objeto
   */
  public toString(): object {
    const discos = this.discografia.toString()
    return {
      Nombre: this.nombre, 
      NumeroOyetes: this.numOyentesMensuales,
      Discografia: discos
    };
  } 
}
