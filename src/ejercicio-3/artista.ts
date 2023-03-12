// La información de un artista, ya sea un grupo o un solista, será la siguiente:
// Nombre
// Número de oyentes mensuales
// Discografía

import { Disco } from "./disco";
import {Discografia} from "./discografia";
import { Single } from "./single";

/**
 * Interfaz Artista, encargada de definir las propiedades mínimas que
 * debe tener un artistas. 
 */
export interface Artista {
    /**
     * Nombre que identifica al Artista
     */
    nombre: string;

    /**
     * Numero de oyentes mensuales que tiene
     * el artista en la plataforma
     */
    numOyentesMensuales: number;

    /**
     * Discografia del artista, la cual puede 
     * estar compuesta por Discos y Singles
     */
    discografia: Discografia<Disco, Single>;
}
