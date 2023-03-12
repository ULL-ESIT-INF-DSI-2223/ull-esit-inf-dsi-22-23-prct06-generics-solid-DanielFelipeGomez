
import {Cancion} from "./cancion";

/**
 * Clase que modela el comportamiento de un Single 
 * en una Biblioteca de Musica
 */
export class Single {
  /**
   * Conructor de la clase Single, se usa el constructor simple del lenguaje
   * @param nombre Nombre que identifica al Single
   * @param temporadaPublicacion Año en el que se lanzó el Single
   * @param versiones Coleccion de versiones que componen el Single
   */
  constructor(public nombre: string,
              public temporadaPublicacion: number, 
              public versiones: Cancion[]) {
  }

  /**
   * Metodo encargado de definir como se desea representar el objeto
   * @returns Retorna el objeto que modela como se debe representar 
   */
  public toString(): object {
    const versiones = this.versiones.reduce((acc, elem) => acc + ', ' + elem.toString(), '')
    return {
      Nombre: this.nombre, 
      NumOyetes: this.temporadaPublicacion,
      Discografia: versiones
    };
  } 
}