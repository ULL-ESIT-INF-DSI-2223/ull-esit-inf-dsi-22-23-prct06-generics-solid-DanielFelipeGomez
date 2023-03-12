import { BasicStreamableCollection } from "./basic-streamable-collection";
import { Movie } from "./movie";

/**
 * Clase encargada de modelar el comportamiento de una colección de Peliculas
 */
export class MoviesCollection extends BasicStreamableCollection<Movie> {
    /**
     * Contructor de la clase MoviesCollection
     * @param collection Define una colección de elementos pelicula.
     */
    constructor(collection: Movie[]) {
        super(collection)
    }

    /**
     * Método encargado de imprimir con formato el conjunto de elementos Movie
     * @returns 
     */
    print(): string {
        return this.collection.reduce((acc, elem) => acc + ' ' + elem.print() + '\n', 'Movies\n')
    }
}
