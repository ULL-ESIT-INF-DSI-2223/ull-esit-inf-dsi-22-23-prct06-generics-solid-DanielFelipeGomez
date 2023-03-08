

import { Collectable } from "./collectable";
import { Printable } from "./printable";

/**
 * Implemente una clase abstracta genérica 'PrintableCollection' que implemente 
 * las interfaces genéricas 'Collectable' y 'Printable'. Tenga en cuenta que en este 
 * punto deberá implementar todos los metodos de la interfaz 'Collectable', mientras 
 * que el método print de 'Printable' será abstracto, de modo que aquellas clases que 
 * extiendan a 'PrintableCollection' tengan que implementarlo obligatoriamente.
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {

    /**
     * Constructor de la clase abastracta
     * @param items 
     */
    constructor(protected items: T[]) {
    }
  
    /**
     * metodo para añadir los elementos
     * @param newItem 
     */
    addItem(newItem: T) {
      this.items.push(newItem);
    }

    /**
     * metodo para devolver un elemento solicitado
     * @param index 
     * @returns 
     */
    getItem(index: number): T{
        return this.items[index];
    }

    /**
     * metodo para eliminar un elmento dado su indice
     * @param removeIndex 
     * @returns 
     */
    removeItem(removeIndex: number): T{
        this.items.splice(removeIndex, 1)
        return this.items[removeIndex];
    }

    /**
     * metodo que retonra la longitud del array de elementos
     * @returns 
     */
    getNumberOfItems() {
      return this.items.length;
    }

    /**
     * Metodo abstracto que se debera implementar en las clases que hereda
     */
    abstract print(): string;

}
  