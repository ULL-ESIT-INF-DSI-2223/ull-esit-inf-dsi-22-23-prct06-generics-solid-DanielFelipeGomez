// Implemente una interfaz genérica 'Collectable' con los siguientes métodos, 
// los cuales deberá definir toda clase que quiera implementar dicha 
// interfaz: addItem, getItem, removeItem, getNumberOfItems.

/**
 * Implemente una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir 
 * toda clase que quiera implementar dicha interfaz: addItem, getItem, removeItem, getNumberOfItems.
 */
export interface Collectable<T> {
    addItem(newItem: T): void;
    getItem(searchTerm: number): T;
    removeItem(removeIndex: number): T;
    getNumberOfItems(): number;
}