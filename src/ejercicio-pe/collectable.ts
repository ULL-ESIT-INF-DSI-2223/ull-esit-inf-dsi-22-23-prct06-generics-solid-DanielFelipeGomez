// Implemente una interfaz genérica 'Collectable' con los siguientes métodos, 
// los cuales deberá definir toda clase que quiera implementar dicha 
// interfaz: addItem, getItem, removeItem, getNumberOfItems.

/**
 * Implemente una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir 
 * toda clase que quiera implementar dicha interfaz: addItem, getItem, removeItem, getNumberOfItems.
 */
export interface Collectable<T> {
    /**
     * metodo para ñaadir elementos a un array
     * @param newItem 
     */
    addItem(newItem: T): void;

    /**
     * metodo paraobtener un elemento del array
     * @param searchTerm 
     */
    getItem(searchTerm: number): T;

    /**
     * metodo para remover un elemento del array 
     * @param removeIndex 
     */
    removeItem(removeIndex: number): T;

    /**
     * metodo para obtener el numero de elmentos
     */
    getNumberOfItems(): number;
}