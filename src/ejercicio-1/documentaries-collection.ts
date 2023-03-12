import { BasicStreamableCollection } from "./basic-streamable-collection"
import { Documentary } from "./documentary"

/**
 * Clase encargada de modelar el comportamiento de una colección de Documentales
 */
export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
    /**
     * Contructor de la clase DocumentariesCollection
     * @param collection Define una colección de elementos documental.
     */
    constructor(collection: Documentary[]) {
        super(collection)
    }

    /**
     * Método encargado de imprimir con formato el conjunto de elementos Documentary
     * @returns 
     */
    print(): string {
        return this.collection.reduce((acc, elem) => acc + ' ' + elem.print() + '\n', 'Documentaries\n')
    }
}
