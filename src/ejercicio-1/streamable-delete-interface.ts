/**
 * si se desea implementar esta interfaz, 
 * se deberá tener un método *delete* que recibe como 
 * argumento un indice del elemento que se pretende eliminar
 */
export interface StreamableDelete<T> {
    /**
     * Se pretende desarrollar un método que dado un indice
     * elimina el elemento correspondiente a dicho indice
     * @param index Indice del elemento a eliminar
     */
    delete(index: number): T;
}