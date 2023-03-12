/**
 * Si se pretende implementar esta interfaz, se 
 * deberá tener 4 propiedades 
 */
export interface StreamableProperties {
    /**
     * Titulo del elemento streamable 
     */
    title: string;

    /**
     * Año de lanzamiento del contenido streamable
     */
    year: number;

    /**
     * Genero del contenido streamable
     */
    genre: string;

    /**
     * Puntuación del contenido streamable
     */
    rating: number;
}