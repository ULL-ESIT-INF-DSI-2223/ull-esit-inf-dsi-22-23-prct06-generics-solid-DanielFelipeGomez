import { StreamablePrintable } from "./streamable-printable-interface";
import { StreamableProperties } from "./streamable-properties-interface";

/**
 * Clase encargada de modelar el comportamiento de un contenido stream Pelicula
 */
export class Movie implements StreamableProperties, StreamablePrintable{
    /**
     * Contructor de la clase Movie 
     * @param title Recibe un nombre
     * @param year Define un año de lanzamiento
     * @param genre Genero que corresponde al stream
     * @param rating Puntutación recibida
     */
    constructor(public title: string, public year: number, public genre: string, public rating: number) {
        if (this.rating > 10) {
            this.rating = 10
        }
        if (this.rating < 0) {
            this.rating = 0
        }
    }

    /**
     * Método encargado de retornar una cadena que representa la información del Movie
     * @returns Retorna la cadena con formato que se desea
     */
    print(): string {
        return `   ${this.title}\n    YEAR -> ${this.year}\n    GENRE -> ${this.genre}\n    RATINGT -> ${this.rating}\n\n`
    }

}