
/**
 * Implemente una interfaz genérica 'Printable' con los siguientes métodos, 
 * los cuales deberá definir toda clase que desee implementar dicha interfaz: print.
 */
export interface Printable<T> {
    print(): string;
}