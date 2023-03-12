import { BasicStreamableCollection } from "./basic-streamable-collection";
import { Serie } from "./serie";

/**
 * Clase encargada de modelar el comportamiento de una colección de series
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
    /**
     * Contructor de la clase SeriesCollection
     * @param collection Define una colección de elementos Serie.
     */
    constructor(collection: Serie[]) {
        super(collection)
    }

    /**
     * Método encargado de imprimir con formato el conjunto de elementos Serie
     * @returns 
     */
    print(): string {
        return this.collection.reduce((acc, elem) => acc + ' ' + elem.print() + '\n', 'Series\n')
    }

}
