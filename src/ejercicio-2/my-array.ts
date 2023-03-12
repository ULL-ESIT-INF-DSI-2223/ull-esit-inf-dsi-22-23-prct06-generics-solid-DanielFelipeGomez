// En este ejercicio tendrá que implementar una clase genérica que modele
//  una lista de elementos de cualquier tipo y sus operaciones sin hacer 
//  uso de ninguna de las funcionalidades proporcionadas por Array.prototype.
//   Se permite, sin embargo, el uso de [].

import { MyArrayInterface } from "./my-array-interface";

/**
 * Clase encargada de simular el comportamiento de un array
 */
export class MyArray<T> implements MyArrayInterface<T> {
    /**
     * Constructor de la clase MyArray, define un conjunto
     * protegido de elementos de tipo T genérico
     */
    constructor(protected _items: T[]) {
    }

    /**
     * Getter del conjunto de elementos que componen al objeto
     */
    get items(): T[] {
        return this._items;
    }

    /**
     * Método append, el cual, dadas dos listas, 
     * permite añadir al final de la primera los elementos
     *  de la segunda.
     * @param arr conjunto a añadir al invocador.
     */
    append(arr: MyArray<T>): void {
        const new_arr = [...this._items, ...arr._items];
        this._items = new_arr;
    }
    
    /**
     * Método concatenate, que dado un número variable de listas, 
     * combina todos sus elementos en una única lista que retorna.
     * @param arrs Conjuntos que se añadirán al invocador.
     */
    concatenate(...arrs: MyArray<T>[]): MyArray<T> {
        let new_arr = new MyArray<T>([...this._items]);
        let counter = 0; 
        while (arrs[counter] !== undefined) {
            const aux = arrs[counter];
            new_arr._items = [...new_arr._items, ...aux._items];
            counter++;
        }
        return new_arr;
    }

    /**
     * Método filter, que dada una lista y un predicado lógico retorna 
     * una lista con todos los elementos de la lista inicial para los 
     * cuales el predicado lógico es verdadero.
     * @param expression Expresión a evaluar 
     */
    filter(expression: (elem: T) => boolean): MyArray<T> {
        let new_arr: MyArray<T> = new MyArray<T>([]);
        for (let i = 0; i < this.length(); i++) {
            if (expression(this._items[i]) === true) {
                new_arr.append(new MyArray<T>([this._items[i]]))
            }
        }
        return new_arr;
    }

    /**
     * Método length, que devuelve el número de elementos de la lista.
     */
    length(): number {
        let counter = 0; 
        while (this._items[counter] !== undefined) {
            counter++;
        }
        return counter;
    }

    /**
     * Método map, que dada una lista y una función, retorna la lista 
     * resultante de aplicar a cada elemento de la lista inicial la función.
     * @param func función a aplicar 
     */
    map(func: (element: T) => T): MyArray<T> {
        let new_arr: MyArray<T> = new MyArray<T>([]);
        for (let i = 0; i < this.length(); i++) {
            new_arr.append(new MyArray<T>([func(this._items[i])]))
        }
        return new_arr;
    }

    /**
     * Método reduce, que dada una lista, una función y un acumulador inicial, 
     * reduce cada elemento al acumulador utilizando la función.
     * @param func Función para reducir
     * @param acc acumulador 
     */
    reduce<R>(func: (acc: R, element: T, indice: number, elements: T[]) => R, acc: R): R {
        let result: R = acc;
        for (let i = 0; i < this.length(); i++) {
            result = func(result, this.items[i], i, this.items);
        }
        return result;
    }

    /**
     * Método reverse, el cual dada una lista, 
     * retorna una lista con los elementos originales 
     * pero en orden inverso.
     */
    reverse(): MyArray<T> {
        let new_arr = new MyArray<T>([]);
        for (let i = this.length() - 1; i >= 0; --i) {
            new_arr.append(new MyArray<T>([this._items[i]]))
        }
        return new_arr;
    }

    /**
     * Método forEach, que dada una lista y una función, 
     * permite iterar en los elementos de la lista e invocar 
     * la función con cada uno de ellos.
     * @param func 
     */
    forEach(func: (elemento: T, indice: number, elementos: T[]) => void) {
        for (let i = 0; i < this.length(); i++) {
            func(this.items[i], i, this.items);
        }
    }
  
}






