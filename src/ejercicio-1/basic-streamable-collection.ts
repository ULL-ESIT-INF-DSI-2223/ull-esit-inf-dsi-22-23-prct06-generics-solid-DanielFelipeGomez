import { StreamableAdd } from "./streamable-add-interface";
import { StreamableDelete } from "./streamable-delete-interface";
import { StreamablePrintable } from "./streamable-printable-interface";
import { StreamableProperties } from "./streamable-properties-interface";
import { StreamableSearch } from "./streamable-search-interface";

/**
 * Clase abstracta genérica que permite emular una colección de elementos de un 
 * tipo de contenido Stream
 */
export abstract class BasicStreamableCollection<T extends StreamableProperties> implements StreamableAdd<T>, StreamableDelete<T>, StreamableSearch<T>, StreamablePrintable {
    /**
     * Constructor de la clase BasicStreamableCollection
     * @param _collection toma un array de elementos streameables
     */
    constructor(protected _collection: T[]) {
    }

    /**
     * Getter del conjunto de elementos streameables
     */
    get collection() {
        return this._collection;
    }

    /**
     * Declaración abstracta del método print
     */
    abstract print(): string;
    
    /**
     * Método encargado de buscar un stream según el titulo dado
     * @param title Titulo del contenido 
     * @returns Retorna el elemento si lo encuentra, en otro caso undefined
     */
    searchByTitle(title: string): T | undefined {
        for (let i = 0; i < this.collection.length; ++i) {
            if (this.collection[i].title === title) {
                return this.collection[i];
            }
        }
        return undefined;
    }

    /**
     * Método encargado de buscar un stream según el año dado
     * @param year Año a buscar
     * @returns Retorna el elemento si lo encuentra, en otro caso undefined
     */
    searchByYear(year: number): T[] | undefined {
        let collectionByYear: T[] = [];
        for (let i = 0; i < this.collection.length; ++i) {
            if (this.collection[i].year === year) {
                collectionByYear.push(this.collection[i]);
            }
        }
        return collectionByYear === undefined ? undefined : collectionByYear;
    }

    /**
     * Método encargado de buscar un stream según el titulo dado
     * @param genre Genero a buscar
     * @returns Retorna el elemento si lo encuentra, en otro caso undefined
     */
    searchByGenre(genre: string): T[] | undefined {
        let collectionByYear: T[] = [];
        for (let i = 0; i < this.collection.length; ++i) {
            if (this.collection[i].genre === genre) {
                collectionByYear.push(this.collection[i]);
            }
        }
        return collectionByYear === undefined ? undefined : collectionByYear;    
    }

    /**
     * Método encargado de buscar un stream según el titulo dado
     * @param rating Puntuacón a buscar
     * @returns Retorna el elemento si lo encuentra, en otro caso undefined
     */
    searchByRating(rating: number): T[] | undefined {
        let collectionByYear: T[] = [];
        for (let i = 0; i < this.collection.length; ++i) {
            if (this.collection[i].rating === rating) {
                collectionByYear.push(this.collection[i]);
            }
        }
        return collectionByYear === undefined ? undefined : collectionByYear;
    }

    /**
     * Método encargado de borrar un elemento
     * @param index Indice correspondiente al elemento a eliminar
     * @returns Retorna el elemento que se ha eliminado
     */
    delete(index: number): T {
        const elementToDelete = this.collection[index];
        this.collection.splice(index, 1);
        return elementToDelete;
    }

    /**
     * Método encargado de añadir un elemento dado
     * @param stream Elemento que se pretende añadir
     * @returns Retorna true si se ha añadido, false en otro caso
     */
    add(stream: T): boolean {
        this.collection.push(stream);
        if (this.collection.includes(stream)){
            return true;
        }
        return false;
    }
    
}

