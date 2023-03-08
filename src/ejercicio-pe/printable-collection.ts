

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
    constructor(protected items: T[]) {
    }
  
    addItem(newItem: T) {
      this.items.push(newItem);
    }

    getItem(index: number): T{
        return this.items[index];
    }

    removeItem(removeIndex: number): T{
        this.items.splice(removeIndex, 1)
        return this.items[removeIndex];
    }
  
    getNumberOfItems() {
      return this.items.length;
    }

    abstract print(): string;

}
  