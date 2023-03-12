
import {Artista} from "./artista";
import {Cancion} from "./cancion";
import {Disco} from "./disco";
import { Discografia } from "./discografia";
import { Single } from "./single";

/**
 * Clase que modela una Biblioteca de musica, que 
 * esta compuesta por Artistas, discografia y Canciones
 * en esta se pueden buscar canciones, discos/singles y artistas
 * además de algunos datos de los mismos.
 */
export class BibliotecaMusical {
  /**
   * Contructor simple de la clase 
   * @param artistas Lista de Artistas que componen la biblioteca
   * @param discografia Lista de discografia que componen la biblioteca
   * @param canciones Lista de canciones que componen la biblioteca
   */
  constructor(public artistas: Artista[], public discografia: Discografia<Disco, Single>, public canciones: Cancion[]) {
  }

  /**
   * Método encargado de buscar a un Artista en concreto dado su nombre 
   * @param nombre 
   * @returns Retorna un objeto que puede ser de la clase Solista o Grupo
   */
  public buscarArtista(nombre: string): Artista | undefined {
    for (let i = 0; i < this.artistas.length; ++i) {
      if (this.artistas[i].nombre === nombre) {
        return this.artistas[i];
      }
    }
    return undefined;
  }

  /**
   * Método encargado de buscar un Disco/Single en concreto dado su nombre
   * @param nombre 
   * @returns Retorna un objeto que puede ser un Disco o un Single 
   */
  public buscarDiscografia(nombre: string): Disco | Single | undefined {
    for (let i = 0; i < this.discografia.discografia.length; ++i) {
      if (this.discografia.discografia[i].nombre === nombre) {
        return this.discografia.discografia[i];
      }
    }
    return undefined;
  }

  /**
   * Método encargado de buscar una Cancion en concreto dado su nombre
   * @param nombre 
   * @returns Retorna un objeto de la clase Cancion
   */
  public buscarCancion(nombre: string): Cancion | undefined{
    for (let i = 0; i < this.canciones.length; ++i) {
      if (this.canciones[i].nombre === nombre) {
        return this.canciones[i];
      }
    }
    return undefined;
  }
  
  /**
   * Método que permite calcular el número de canciones incluidas
   * en un disco concreto.
   * @param Disco 
   * @returns Retorna el número de elementos
   */
  public numCancionesEnDisco(disco: Disco): number {
    return disco.canciones.length;
  }

  /**
   * Método que permite calcular el número de canciones incluidas
   * en un Single concreto.
   * @param Single 
   * @returns Retorna el número de elementos
   */
  public numCancionesEnSingle(single: Single): number {
    return single.versiones.length;
  }

  /**
   * Permitir calcular la duración de un disco, a partir de la 
   * duración de todas y cada una de las canciones que lo conforman.
   * @param disco 
   * @returns Retorna el número de segundos totales
   */
  public duracionDisco(disco: Disco) {
    return disco.canciones.reduce((acc, elem) => acc + elem.duracionSegundos, 0);
  }

  /**
   * Permitir calcular la duración de un Single, a partir de la 
   * duración de todas y cada una de las canciones que lo conforman.
   * @param Single 
   * @returns Retorna el número de segundos totales
   */
  public duracionSingle(single: Single) {
    return single.versiones.reduce((acc, elem) => acc + elem.duracionSegundos, 0);
  }

  /**
   * Permitir calcular el número de reproducciones de un disco, 
   * a partir del número de reproducciones de todas y cada una de 
   * las canciones incluidas en el mismo.
   * @param disco 
   * @returns Retorna el número total de reproducciones
   */
  public numTotalReproduccionDisco(disco: Disco) {
    return disco.canciones.reduce((acc, elem) => acc + elem.numReproduciones, 0);
  }

  /**
   * Permitir calcular el número de reproducciones de un Single, 
   * a partir del número de reproducciones de todas y cada una de 
   * las canciones incluidas en el mismo.
   * @param Single 
   * @returns Retorna el número total de reproducciones
   */
  public numTotalReproduccionSingle(single: Single) {
    return single.versiones.reduce((acc, elem) => acc + elem.numReproduciones, 0);
  }

  /**
   * Metodo encagrado de definir como se desea reprsentar el objeto
   * @returns Retorna el objeto que define como se quiere representar
   */
  public toString(): object {
    return {
      Artistas: this.artistas, 
     discografia: this.discografia.discografia,
      Canciones: this.canciones
    }
  }
}




