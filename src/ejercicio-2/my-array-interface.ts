import { MyArray } from "./my-array";

/**
 * Interfaz que define las funciones necesarias para poder
 * desarrollar una clase que emule las funciones básicas de 
 * un array de tipo genérico
 */
export interface MyArrayInterface<T> {
    /**
     * Método append, el cual, dadas dos listas, 
     * permite añadir al final de la primera los elementos
     *  de la segunda.
     * @param arr conjunto a añadir al invocador.
     */
    append(arr: MyArray<T>): void;
    
    /**
     * Método concatenate, que dado un número variable de listas, 
     * combina todos sus elementos en una única lista que retorna.
     * @param arrs Conjuntos que se añadirán al invocador.
     */
    concatenate(...arrs: MyArray<T>[]): MyArray<T>;
    
    /**
     * Método filter, que dada una lista y un predicado lógico retorna 
     * una lista con todos los elementos de la lista inicial para los 
     * cuales el predicado lógico es verdadero.
     * @param expression Expresión a evaluar 
     */
    filter(expression: (elem: T) => boolean): MyArray<T>;
    
    /**
     * Método length, que devuelve el número de elementos de la lista.
     */
    length(): number;
    
    /**
     * Método map, que dada una lista y una función, retorna la lista 
     * resultante de aplicar a cada elemento de la lista inicial la función.
     * @param func función a aplicar 
     */
    map(func: (element: T) => T): MyArray<T>;
    
    /**
     * Método reduce, que dada una lista, una función y un acumulador inicial, 
     * reduce cada elemento al acumulador utilizando la función.
     * @param func Función para reducir
     * @param acc acumulador 
     */
    reduce<R>(func: (acc: R, element: T, index: number, elements: T[]) => R, acc: R): R;

    /**
     * Método reverse, el cual dada una lista, 
     * retorna una lista con los elementos originales 
     * pero en orden inverso.
     */
    reverse(): MyArray<T>;

    /**
     * Método forEach, que dada una lista y una función, 
     * permite iterar en los elementos de la lista e invocar 
     * la función con cada uno de ellos.
     * @param func 
     */
    forEach(func: (element: T, index: number) => void): void;
    
}