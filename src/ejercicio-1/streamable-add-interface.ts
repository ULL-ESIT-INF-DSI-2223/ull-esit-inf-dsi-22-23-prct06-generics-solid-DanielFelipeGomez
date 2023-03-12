/**
 * si se desea implementar esta interfaz, 
 * se deberá tener un método *add* que recibe como 
 * argumento un elemento de tipo genérico *T* y retorna un *boolean*.
 */
export interface StreamableAdd<T> {
    /**
     * Recibe un elemento de tipo genérico T que será añadido 
     * en caso de añadirse con éxito se retorna true
     * @param stream 
     */
    add(stream: T): boolean;
}
