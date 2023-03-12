/**
 * Si se pretende implementar la sigueinte interfaz, se deben 
 * tener 4 métodos de busqueda para elementos streamables
 * se podrá buscar dado un: titulo, año, género, puntaje.
 */
export interface StreamableSearch<T> {
    /**
     * Dado un title se deberá retornar el elemento
     * correspondiente que se encuentre con ese nombre
     * @param title Titulo a buscar
     */
    searchByTitle(title: string): T | undefined;

    /**
     * Dado un año, se deberá retornar los elementos que 
     * se encuentren que hayan sido lanzados en ese año
     * @param year Año a buscar
     */
    searchByYear(year: number): T[] | undefined;

    /**
     * Dado un genero, se deben retornar los elementos
     * que se encuentren con dicho genero
     * @param genre Genero a buscar
     */
    searchByGenre(genre: string): T[] | undefined;

    /**
     * Dado un puntaje, se deben retornar los elementos 
     * que correspondan a dicho puntaje
     * @param rating Puntaje a buscar
     */
    searchByRating(rating: number): T[] | undefined;
}