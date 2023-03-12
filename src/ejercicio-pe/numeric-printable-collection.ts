
import { PrintableCollection } from "./printable-collection";

/**
 * Extienda la clase abstracta genérica 'PrintableCollection' escribiendo 
 * la subclase 'NumericPrintableCollection'. Esta clase deberá modelar una 
 * colección de elementos numéricos en la que el método print devolverá la representación en 
 * cadena de los números de la colección separados por comas.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
    /**
     * Constructor de la clase 
     * @param items array con los items numericos
     */
    constructor(items: number[]) {
        super(items);
    }

    /**
     * retorna una cadena con formato para imprimir
     * @returns 
     */
    print(){
        return this.items.reduce((acc, item) => acc + item + ', ', '')
    }
}


