

/**
 * Clase Cancion que modela el comportamiento de
 * una cancion en una biblioteca musical.
 */
export class Cancion {
  /**
   * Constructor de la clase Cancion 
   * @param nombre Nombre que recibe la cancion
   * @param duracionSegundos Duración en segundos de la canción
   * @param generos Lista de generos que engloban a la canción
   * @param single Determina si la canción es un single o no
   * @param numReproduciones Numero de reproducciones que tiene la canción
   */
  constructor(public nombre: string, 
              public duracionSegundos: number, 
              public generos: string[], 
              public single: boolean, 
              public numReproduciones: number) {
  }

  /**
   * Metodo encagrado de definir como se desea reprsentar el objeto
   * @returns Retorna el objeto que define comose quiere representar
   */
  public toString(): object {
    return {
      Nombre: this.nombre, 
      NumOyetes: this.duracionSegundos,
      Discografia: this.generos.toString(),
      Single: this.single === true ? 'Si' : 'No',
      NumReproducciones: this.numReproduciones
    };
  } 
}