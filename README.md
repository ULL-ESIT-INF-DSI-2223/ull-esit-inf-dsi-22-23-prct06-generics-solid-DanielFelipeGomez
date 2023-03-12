# Práctica 6 - Clases e interfaces genéricas. Principios SOLID
## Daniel Felipe Gomez Aristizabal

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-DanielFelipeGomez/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-DanielFelipeGomez?branch=main)

## Indice
1. [Introducción](#id1)

2. [Pasos previos](#id2)

3. [Hablemos de Instanbul y Coveralls](#id8)

3. [Ejercicio 1 - DSIflix](#id3)

4. [Ejercicio 2 - Implementación de una lista y sus operaciones](#id4)

3. [Ejercicio 3 - Ampliando la biblioteca musical](#id5)

5. [Ejercicio 3 - Modificación](#id6)

6. [Ejercicio 4 - Modificación](#id7)

7. [Conclusión](#id15)

8. [Referencias](#id16)


<div id='id1' />

## Introducción

Tras terminar de estudiar las interfaces y clases genéricas, se pretende desarrollar una serie de ejercicios que nos permitan poner en practica nuestros conocimientos, además de mejor nuestras habilidades de desarrollo. Es importe seguir todas la técnicas vistas en clase para respetar los **principios SOLID**.

Para el desarrollo de cada ejercicio se seguirá la metodología de desarrollo dirigió por pruebas o *TDD*. Además se generará la documentación automática con *TypeDoc*. 

<div id='id2' />

## Pasos previos

Una vez aceptada la tarea asociada a esta práctica, debemos descargar las dependencias necesariaas para hacer informes sobre el cubrimiento de código automáticamente mediante las herrramientas *Instanbul* y *Coveralls*. En el aula virtual de la asignatura hay un [video](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view?usp=sharing) donde se muestra paso a paso la configuración de las herramientas antes mencionadas.


<div id='id8' />

## Hablemos de Instanbul y Coveralls

Es interesante el uso de este tipo de herramientas, que realmente te ayudan a entender cuan automatizadas están las cosas en el sector. Al final todo el tiempo al entrar a repositorios veíamos el botón verde sin saber que significaba todo un certificado de comprobación de control y ni importancia le dábamos. 

Es bueno ver que tan robusto va siendo nuestro código y como las pruebas toman cada vez un papel más importante a la hora de desarrollar código.

<div id='id3' />

## Ejercicio 1 - DSIflix

Se pretende diseñar un modelo de datos para un plataforma de video en streaming. El contenido puede ser peliculas, series o documentales. Debemos entonces desarrollar todas las clases e interfaces que  nos ayuden modelar lo anteriormente mencionado. 

### Streamable

Se proponía crear una interfaz genérica *Streamable*, la cual permitiría definir todos los elementos necesarios para definir cada uno de los elementos del catálogo. Además se mencionaba la posibilidad de dividir dicha interfaz en varias interfaces más pequeñas para poder respetar el cuarto principio SOLID Interface segregation.

Es por esto que decidí desglosar mi interfaz en varias interfaces más específicas.

#### Streamable add interface

Sencillamente se define la interfaz genérica, si se desea implementar esta interfaz, se deberá tener un método *add* que recibe como argumento un elemento de tipo genérico *T* y retorna un *boolean*.

Se puede ver como defino una interfaz muy simple y con un objetivo muy claro que sea añadir, de esta forma ala hora de añadirla a una clase, no se obliga a desarrollar funciones que la clase quizás no necesita. Gracias a esto seguimos los principios SOLID.

```ts
export interface StreamableAdd<T> {
    add(stream: T): boolean;
}
```

#### Streamable delete interface

Ahora se define una interfaz nuevamente muy sencilla que, si se desea implementar en una clase, deberá tenerse un método *delete*, el cual como su nombre indica pretende eliminar un elemento. Para esto, recibe por parámetros un indice correspondiente al elemento que se pretende eliminar. Dicho elemento se deberá retornar.


```ts
export interface StreamableDelete<T> {
    delete(index: number): T;
}
```



#### Streamable printable interface

Si deseamos que nuestra clase imprima algo por pantalla, es coherente implementar esta interfaz, con la cual prometes tener un método llamado *print* que retornará una cadena, esta cadena deberá ser una *string* con formato para imprimir por pantalla por ejemplo.

Al final, entre las ideas que se me ocurrió que necesitaríamos al diseñar una modelo de datos, sin duda es imprescindible poder visualizar dichos datos, por eso decidí desarrollar la interfaz.


```ts
export interface StreamablePrintable {
    print(): string;
}
```

#### Streamable search interface

Hay modelar todos los datos para una plataforma de Stream, necesitaremos formar de poder desarrollar búsquedas, podemos hacerlas de distintas formas, en mi caso se me han ocurrido 4.

La primera forma es la más sencilla, por lo general, por no decir casi siempre, los streams tiene un título único y es por esto que *searchByTitle* busca mediante un titulo en toda la base y retorna el elemento que le corresponda el titulo mencionado. En caso de no encontrarlo retornará *undefined*.

Otra forma muy útil de filtrar el contenido es mediante año de lanzamiento, *searchByYear* hace justo eso. Retorna una lista de todos los elementos que coinciden con la fecha especificada.

Trabajando de manera similar *searchByGenre* realiza la misma acción que el método anterior pero esta vez filtrando a partir de un género especificado.

Por último, *searchByRating* hace lo mismo que hemos visto en los anteriores métodos pero filtrando a partir de una puntuación.

```ts
export interface StreamableSearch<T> {
    searchByTitle(title: string): T | undefined;
    searchByYear(year: number): T[] | undefined;
    searchByGenre(genre: string): T[] | undefined;
    searchByRating(rating: number): T[] | undefined;
}
```

#### Streamable properties interface

Considero útil ver a las interfaces como un contrato que debes cumplir si la quieres implementar. Es por esto que desarrolle la interfaz que define las propiedades mínimas que deberán tener nuestros *Streams*. Lógicamente esto no limita que se añadan más a posteriori en las clases, pero si pide un mínimo indispensable.

Además el hecho de definir unas propiedades iniciales a cumplir, permite asegurar que nuestras anteriores interfaces funcionen correctamente, un claro ejemplo de esto ocurre con las interfaces de búsqueda, que justo filtran por las propiedades que se especifican en la interfaz en cuestión.

```ts
export interface StreamableProperties {
    title: string;
    year: number;
    genre: string;
    rating: number;
}
```

### Basic Streamable Collection

Llegados a este punto nuestro siguiente objetivo es definir una clase abstracta genérica que nos permita implementar las interfaces que antes hemos mencionado. En esta clase podremos desarrollar algunos de los métodos ya vistos en las interfaces, mientras que otros métodos como el caso de *print* los dejaremos como abstractos para definirlos a posterior en otro nivel más particular.

Debemos tener dos puntos claros:

1. Definí la clase como genérica que extiende de *StreamableProperties* con el objetivo de definir la forma mínima que deben tener los objetos a tratar. Con esto podemos asegurar algunas propiedades que deberán tener los elementos que trataremos. Esto permite hacer referencia a determinadas propiedades como 'title' desde métodos definidos dentro de la clase.

2. La clase implementa las interfaces que vimos en apartados anteriores, las cuales son; StreamableAdd<T>, StreamableDelete<T>, StreamableSearch<T>, StreamablePrintable.

```ts
export abstract class BasicStreamableCollection<T extends StreamableProperties> implements StreamableAdd<T>, StreamableDelete<T>, StreamableSearch<T>, StreamablePrintable {
...
}
```

#### Constructor

Definí un constructor sencillo donde se define una propiedad *protected* llamada *_collection* la cual es como bien su nombre indica una colección, esta colección será del tipo T especificado en la particularización de la clase.

```ts
constructor(protected _collection: T[]) {
}
```

#### Get Collection

Deseo acceder a ver la collection de elementos desde fuera para poder hacer pruebas y para diferentes accesos a posterior, es por esto que para evitar que se pueda acceder libremente a la colección deje la restricción *protected* pero incluí el getter, para respetar el encapsulamiento sin restarme funcionalidades.

```ts
get collection() {
    return this._collection;
}
```

#### Print

Para poder dejar que se especifique más adelante el método para imprimir, lo dejé como *abstract*.

```ts
abstract print(): string;
```

#### Search By Title

Básicamente se recorre nuestra colección de elementos con un bucle *for* y se va verificando si existe alguna coincidencia con el título especificado por parámetros, en caso de encontrarse se retorna el elemento. Si se termina de recorrer el bucle sin encontrase ningún elemento, se retorna *undefined*.

```ts
searchByTitle(title: string): T | undefined {
    for (let i = 0; i < this.collection.length; ++i) {
        if (this.collection[i].title === title) {
            return this.collection[i];
        }
    }
    return undefined;
}
```

#### Search By Year

De forma similar al método que se veía justo arriba, *searchByYear*  recorre nuestra colección de elementos con un bucle *for* y se va verificando si existe alguna coincidencia con el año especificado por parámetros, en caso de encontrarse se añade el elemento a una lista de elementos T definida previamente. Es justo aquí donde se encuentra la diferencia fundamental, ya que en este método se contempla que se pueden encontrar más de una coincidencia respecto al parámetro ingresado, es por esto que se rellena una lista con todas las coincidencias.

Antes de retornar se comprueba si la lista está vacía. En caso de estarlo se retornará *undefined*, en cualquier otro caso se retorna dicha lista.

```ts
searchByYear(year: number): T[] | undefined {
    let collectionByYear: T[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
        if (this.collection[i].year === year) {
            collectionByYear.push(this.collection[i]);
        }
    }
    return collectionByYear === undefined ? undefined : collectionByYear;
}
```

#### Search By Genre

Esta función sigue exactamente la misma lógica que *searchByYear* pero esta vez filtra por el género especificado.

```ts
searchByGenre(genre: string): T[] | undefined {
    let collectionByYear: T[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
        if (this.collection[i].genre === genre) {
            collectionByYear.push(this.collection[i]);
        }
    }
    return collectionByYear === undefined ? undefined : collectionByYear;    
}
```

#### Search By Rating

El último de los métodos de búsqueda *searchByRating*. Sigue la misma idea que vimos antes con *searchByYear* y *searchByGenre* con la diferencia de filtrar por un número de puntuación especificado.

```ts
searchByRating(rating: number): T[] | undefined {
    let collectionByYear: T[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
        if (this.collection[i].rating === rating) {
            collectionByYear.push(this.collection[i]);
        }
    }
    return collectionByYear === undefined ? undefined : collectionByYear;
}
```

#### Delete

Para eliminar un elemento, nos fijamos en el indice dado, lo primero que hacemos es guardar en una variable el elemento que se pretende eliminar. Posteriormente, mediante la función *splice* indicamos como primer argumento el indice del elemento a eliminar y como segundo argumento 1, para indicar que solo queremos eliminar un elemento a partir del indice dado, como resultado conseguimos eliminar nuestro elemento. Al finalizar, retornamos el elemento que habíamos guardado, que corresponde con el elemento eliminado.

```ts
delete(index: number): T {
    const elementToDelete = this.collection[index];
    this.collection.splice(index, 1);
    return elementToDelete;
}
```

#### Add

Para añadir un elemento, hacemos uso del método *push*, posteriormente comprobamos que si se añadió y en caso de cumplirse se retorna *true*, en cualquier otro caso retornamos *false*.

```ts
add(stream: T): boolean {
    this.collection.push(stream);
    if (this.collection.includes(stream)){
        return true;
    }
    return false;
}
```

### Documentary | Serie | Movie

Antes de definir nuestra particularización de las colecciones, debemos ver los *streams*. Veremos la explicación con Documentary pero el comportamiento y lógica será el mismo para las demás clases.

Esta clase modela el comportamiento que tendrá un documental, para esto simplemente se implementan las interfaces *StreamProperties* y *StreamPrintable*. Es interesante ver como al desear añadir un método que imprima las instancias de la clase, se puede definir que implementará a la interfaz que acuerda dicho comportamiento. Esto lo conseguimos gracias a haber aplicado el cuarto principio SOLID *Interface segregation* que al tener una responsabilidad especifica para una interfaz se puede incluso reutilizar la interfaz, ya que se asegura que la interfaz responde a una tarea concreta y no obliga a definir una ristra de propiedad que quizás la clase no necesite.

#### Constructor 

Hacemos uso del constructor simplificado de TypeScript para definir las propiedades necesarias para la clase y su visibilidad.

Además se hace ua comprobación que el *rating* se mantenga en el rango de (0 - 10) para evitar problemas de incompatibilidad en las búsquedas.

```ts
constructor(public title: string, public year: number, public genre: string, public rating: number) {
    if (this.rating > 10) {
        this.rating = 10
    }
    if (this.rating < 0) {
        this.rating = 0
    }
}
```

#### Print

Definimos el formato de impresión que se pretende seguir para las instancias de la clase.

```ts
print(): string {
    return `   ${this.title}\n    YEAR -> ${this.year}\n    GENRE -> ${this.genre}\n    RATINGT -> ${this.rating}\n\n`
}
```

### Documentary | Serie | Movie Collection

Si vemos una vista general de la clase

```ts
export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
    constructor(collection: Documentary[]) {
        super(collection)
    }

    print(): string {
        return this.collection.reduce((acc, elem) => acc + ' ' + elem.print() + '\n', 'Documentaries\n')
    }
}
```

Como podemos ver hemos llegado al punto donde hacemos la particularización de nuestro *BasicStreamableCollection*. Especificamos el tipo en Documentary (para el caso del ejemplo). Mandamos a llamar al constructor de la clase padre.

Finalmente definimos el *print* que habíamos dejado abstracto en la clase superior. Simplemente vamos reduciendo el resultado de llamar al propio método *print* especificado en cada *stream*.

<div id='id4' />

## Ejercicio 2 - Implementación de una lista y sus operaciones

Para el siguiente ejercicio se pretende implementar una clase genérica que modele el comportamiento de un array de cualquier tipo T. Para su implementación no podemos hacer uso de ningún método de *Array.prototype*, pero si se permite el uso de **[]**.

Para el desarrollo del ejercicio definí una interfaz genérica que acordará los elementos que se deben tener para definir la clase y luego en uan clase genérica implementaré lo necesario acordado en la interfaz.

### My Array Interface

Primeramente veremos los requisitos que acordaremos en la interfaz.

* Método append, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.

```ts
append(arr: MyArray<T>): void;
```

* Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.

```ts
concatenate(...arrs: MyArray<T>[]): MyArray<T>;
```

* Método filter, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.


```ts
filter(expression: (elem: T) => boolean): MyArray<T>;
```

* Método length, que devuelve el número de elementos de la lista.

```ts
length(): number;
```

* Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.

```ts
map(func: (element: T) => T): MyArray<T>;
```

* Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.

```ts
reduce<R>(func: (acc: R, element: T, indice: number, elements: T[]) => R, acc: R): R;
```

* Método reverse, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.

```ts
reverse(): MyArray<T>;
```

* Método forEach, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos.

```ts
forEach(func: (element: T, index: number) => void): void;
```

### My Array

Una vez vistos los métodos que se pretenden definir y la forma que tendrán las funciones, veamos como definimos cada uno de ellos.

#### Constructor

Definimos mediante un constructor simplificado que tendremos una colección de elementos o *_items* que será *protected*.

```ts
constructor(protected _items: T[]) {
}
```

#### Get Items 

En muchas ocasiones necesitaremos acceder a los elementos para verlos, pero no modificarlos, es por esto que definí el getter. Este también es muy útil para las comprobaciones de los test.

```ts
get items(): T[] {
    return this._items;
}
```

#### Append

Recibimos un conjunto de elementos por parámetros, mediante el operador *...* o *spread operator* definimos un nuevo conjunto, que se compone de todos los elementos que tenemos en nuestro conjunto implícito que llamó a la función, junto con los elementos del conjunto dado por argumentos. De esta forma conseguimos un nuevo conjunto que es la combinación de los anteriores.

Finalmete asigno ese conjunto nuevo a mi colección inicial del objeto invocador.

```ts
append(arr: MyArray<T>): void {
    const new_arr = [...this._items, ...arr._items];
    this._items = new_arr;
}
```

#### Concatenate

Para concatenar los elementos, definí primeramente un conjunto genérico donde inicialmente tendré los elementos del objeto invocador y posteriormente añadiré los demás elementos de los conjuntos pasados. 

Para conseguir lo anterior mediante un bucle *while* y un contador voy recorriendo el conjunto de conjuntos que se han pasado por parámetros, luego mediante el operador *spread operator* voy uniendo la lista que ya tenía, junto con la que corresponda a la iteración del i-ésimo elemento de *arrs*.

Finalmente se retorna el conjunto resultante de ir uniendo todos los conjuntos.

```ts
concatenate(...arrs: MyArray<T>[]): MyArray<T> {
    let new_arr = new MyArray<T>([...this._items]);
    let counter = 0; 
    while (arrs[counter] !== undefined) {
        const aux = arrs[counter];
        new_arr._items = [...new_arr._items, ...aux._items];
        counter++;
    }
    return new_arr;
}
```

#### Filter

Primeramente defino una conjunto genérico vacío. A medida que recorro el conjunto se comprueba si la expresión pasada por parámetros con cada elemento da *true, en caso de darlo, se añade al conjunto que definimos al principio. Finalmente se retorna el conjunto que se ha dio rellenado.

```ts
filter(expression: (elem: T) => boolean): MyArray<T> {
    let new_arr: MyArray<T> = new MyArray<T>([]);
    for (let i = 0; i < this.length(); i++) {
        if (expression(this._items[i]) === true) {
            new_arr.append(new MyArray<T>([this._items[i]]))
        }
    }
    return new_arr;
}
```

#### Length

Inicializamos un contador a cero, el cual va a ir creciendo dentro de un bucle *while*. El bucle se va a ejecutar siempre que la posición a la que se esté intentando acceder no sea *undefined*.

Finalmente se retorna el contador.

```ts
length(): number {
    let counter = 0; 
    while (this._items[counter] !== undefined) {
        counter++;
    }
    return counter;
}
```

#### Map

Inicialmente definimos el conjunto genérico donde iremos almacenando los elementos resultantes del *map*.


Se recorre el conjunto invocaste haciendo uso de un bucle *for* y para cada elemento añadimos nuestro conjunto resultante el elemento resultante de la operación dada por parámetro.

```ts
map(func: (element: T) => T): MyArray<T> {
    let new_arr: MyArray<T> = new MyArray<T>([]);
    for (let i = 0; i < this.length(); i++) {
        new_arr.append(new MyArray<T>([func(this._items[i])]))
    }
    return new_arr;
}
```

#### Reduce

Esta función es sin duda la más peculiar, ya que en lugar de tener un solo tipo genérico, tiene dos. Este segundo tipo es el que nos determina que tipo de elemento resultante se obtendrá y a su vez condiciona el elemento acumulador. Esto se debe a que si por ejemplo estamos tratando con un conjunto de números, el resultado que deseamos puede ser distinto de un *number*, por ejemplo una *string*.

Iniciamos definiendo el acumulador que nos interesa utilizar, este será de tipo R. Luego vamos recorriendo el conjunto T y aplicandole la función para cada elemento. Importante siempre ir actualizando nuestra variable resultado.

Finalmente, retornamos el resultado.

```ts
reduce<R>(func: (acumulador: R, elemento: T, indice: number, elementos: T[]) => R, acumulador: R): R {
    let result: R = acumulador;
    for (let i = 0; i < this.length(); i++) {
        result = func(result, this.items[i], i, this.items);
    }
    return result;
}
```

#### Reverse

Simplemente, vamos recorriendo el conjunto invocaste, pero desde el final al principio y vamos añadiendo cada elemento a un nuevo conjunto. Al final debemos retornar dicho elemento.
```ts
reverse(): MyArray<T> {
    let new_arr = new MyArray<T>([]);
    for (let i = this.length() - 1; i >= 0; --i) {
        new_arr.append(new MyArray<T>([this._items[i]]))
    }
    return new_arr;
}
```

#### ForEach

Para simular el comportamiento del bucle *forEach* vamos recorriendo con un bucle *for* cada elemento de nuestro conjunto y le aplicamos la función que se nos ha pasado por parámetros.

```ts
forEach(func: (elemento: T, indice: number, elementos: T[]) => void) {
    for (let i = 0; i < this.length(); i++) {
        func(this.items[i], i, this.items);
    }
}
```


<div id='id5' />

## Ejercicio 3 - Ampliando la biblioteca musical

Para el ejercicio en cuestión pretendemos mejorar nuestra Biblioteca Musical ya usada en la práctica anterior.

### Correcciones de la práctica anterior

Primeramente había que corregir las observaciones realizadas de la practica anterior. Lo único que me había faltado era la clase *Discografia* que es un conjunto de *Disco*. Los cambios fueron realmente pocos.

Básicamente, definí la clase y para cada aparición de *Disco[]* lo sustituía por *Discografia* con sus respectivas correcciones para poder pasar las pruebas ya implementadas.

### Single

Ahora vamos a tener una nueva entidad *Single* esta es una colección de canciones, pero con la diferencia de que son la misma canción pero distintas versiones.

#### Constructor 

Definí un constructor sencillo que se encarga de definir las tres propiedades que componen a una canción:

* Nombre : Nombre del Single

* temporadaPublicación: Año en el que publicó

* versiones: Que son las distintas canciones que han salido sobre la misma canción.

```ts
constructor(public nombre: string,
            public temporadaPublicacion: number, 
            public versiones: Cancion[]) {
}
```

#### toString

Definimos la forma que deseamos tome nuestras instancias de la clase *Single* a la hora de ser impresas. Simplemente vamos recorriendo las versiones para ir consiguiendo la impresión correspondiente y luego vamos a retornar un objeto con la forma que deseamos.

```ts
public toString(): object {
const versiones = this.versiones.reduce((acc, elem) => acc + ', ' + elem.toString(), '')
    return {
        Nombre: this.nombre, 
        NumOyetes: this.temporadaPublicacion,
        Discografia: versiones
    };
} 
```

#### Otros

Mencionar también que añadí algunos métodos de búsqueda específicos de *Single* ya que le veía más sentido en ciertos casos dejar la división clarea entre los *Disco* y lo *Single*.

```ts
    public numCancionesEnSingle(single: Single): number {
        return single.versiones.length;
    }

    public numTotalReproduccionSingle(single: Single) {
        return single.versiones.reduce((acc, elem) => acc + elem.numReproduciones, 0);
    }

    public duracionSingle(single: Single) {
        return single.versiones.reduce((acc, elem) => acc + elem.duracionSegundos, 0);
    }
```

Destacar que también se hicieron adaptaciones en métodos donde se retornaba un *Disco* para ahora tener la posibilidad de retornar un *Single*

```ts
public buscarDiscografia(nombre: string): Disco | Single | undefined {
    for (let i = 0; i < this.discografia.discografia.length; ++i) {
        if (this.discografia.discografia[i].nombre === nombre) {
            return this.discografia.discografia[i];
        }
    }
    return undefined;
}
```

### Discografía Clase Genérica

Ahora nos queda modificar la clase *Discografia* para convertirla en una clase genérica que nos permita tanto definir una colección de *Disco* como de *Single* o incluso de ambos. 

Para conseguir lo anterior es importante extender de Disco con una variable genérica de tipo T y extender de Single con una variable genérica U. 

```ts
export class Discografia<T extends Disco, U extends Single> {
    ...
}
```

Ahora nuestro constructor define una propiedad *discografia* que hace referencia a la colección de elementos que almacena y esa colección es de tipo *(T | U)*. Esto es muy importante, ya que es la herramientas que nos permite definir una colección de un tipo, de otro o de ambos.

```ts
constructor(public discografia: (T | U)[]) {
}
```

Ahora solo quedaría añadir las distintas pruebas para probar el funcionamiento de *Discografia*. Además las definiciones de *Discografia* ahora hay que añadirle los tipos a los que responde añadiendo al final <Disco, Single>


<div id='id6' />

## Ejercicio PE - Collectable Printable

En el ejercicio par la evaluación del PE, se nos pidió desarrollar una clase abstracta genérica que nos permitiera definir un conjunto de elementos. Debíamos hacer uso de interfaces genéricas que nos permitieran especificar el comportamiento esperado. Finalmente debíamos desarrollar subclases que particularizan el comportamiento de nuestra clase genérica, para tipos concretos, en concreto *number* y *string*.

### Collectable Interface

Desarrolle una interfaz genérica que propone los métodos mínimos para trabajar con un conjunto de elementos.

```ts
export interface Collectable<T> {
    addItem(newItem: T): void;
    getItem(searchTerm: number): T;
    removeItem(removeIndex: number): T;
    getNumberOfItems(): number;
}
```

### Printable Interface 

Definí una interfaz que declara el método *print* requisito imprescindible para hacer de una clase imprimirle. Se acordó que retornara una string para poder desarrollar las pruebas de forma sencilla. 

```ts
export interface Printable<T> {
    print(): string;
}
```

### Printable Collection 

Definimos entonces una clase abstracta genérica que implementa las dos interfaces antes mencionadas.

```ts
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
    ...
}
```

#### Constructor

En el constructor definimos una propiedad protegida llamada *items* que como su nombre indica corresponde con los elementos que componen a nuestro conjunto, es por esto que es un conjunto de *T[]*.

```ts
constructor(protected items: T[]) {
}
```

#### Add Item

Añadimos un elemento, que recibimos por parámetros, a nuestro *array* de elementos.

```ts
addItem(newItem: T) {
    this.items.push(newItem);
}
```

#### Get Item

Dado un indice se retorna el elemento que corresponde con dicha posición, para esto simplemente accedemos al elemento mediante el operador *[]*.

```ts
getItem(index: number): T{
    return this.items[index];
}
```

#### Remove Item

Para remover un elemento de un *array* hacemos uso del método *splice* donde le indicamos como primer parámetro el indice del elemento que deseamos eliminar, es cual es dado como argumento, y como segundo parámetro damos un 1, que corresponde al número de elementos a eliminar. 

```ts
removeItem(removeIndex: number): T{
    this.items.splice(removeIndex, 1)
    return this.items[removeIndex];
}
```

#### Get Num Of Items 

Para obtener el número de elementos que hay en un arreglo hacemos uso de la función *length*.

```ts
getNumberOfItems() {
    return this.items.length;
}
```

#### Abstract Print

Finalmente, dejamos como abstracto el método *print* para definirlo posteriormente en sus particularización.

```ts
abstract print(): string;
```

### Numeric | String Printable Collection

Por último, vamos a definir las subclases, que serán la particularización de la clase genérica. En este caso se mostrará el código ejemplo de *number* pero el proceso es prácticamente idéntico para *string*.

```ts
export class NumericPrintableCollection extends PrintableCollection<number> {
    ...
}
```

#### Contructor

Recibiremos una colección de elementos que pasaremos como argumento para mandar a llamar el constructor de la clase padre.

```ts
constructor(items: number[]) {
    super(items);
}
```

Finalmente, aquí definimos el método *print*. El cual retorna una reducción a *string* del conjunto que tenemos.

```ts
print(){
    return this.items.reduce((acc, item) => acc + item + ', ', '')
}
```


<div id='id15' />

## Conclusión

Esta práctica ha sido muy interesante para entender mejor ciertos conceptos de clases. Siento que ahora entiendo mucho mejor el funcionamiento de los tipos genéricos. Este concepto no recuerdo poder entenderlo bien en C++, asi que me alegro de ahora afianzar dicha idea.

Las prácticas me parecen muy buenas para aprender y me gusta que cada semana se enseñe una nueva herramienta de desarrollo, que siento que nos prepara cada vez más al mundo laboral. Desafortunadamente estoy yendo en las últimas muy apurado de tiempo. No quiero decir con esto que les dedique poco interés, todo lo contrario, posiblemente les dedique incluso más del que debería, pero el proceso me puede llegar a llevar todo el fin de semana. Sobre todo mi problema está en el informe el cual cronometrado  me ha llevado más de 4 horas.

Sin embargo esta es sin duda una asignatura a la que vale la pena invertir tiempo, pues a cambio se aprenden nuevos conceptos, se afianzan conocimientos previos y nos arman con herramientas de desarrollo que nos servirán en un futuro.

<div id='id16' />

## Referencias

[Video de configuración de Instanbul y Coveralls](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view?usp=sharing)
