import 'mocha';
import {expect} from 'chai';
import { MyArray } from "../../src/ejercicio-2/my-array";

// Método append, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.
// Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
// Método filter, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.
// Método length, que devuelve el número de elementos de la lista.
// Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.
// Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.
// Método reverse, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.
// Método forEach, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos.


describe("Pruebas de MyArray", () => {
  let myArrayNumber: MyArray<number>;
  let myArrayString: MyArray<string>;

  beforeEach(() => {
    myArrayNumber = new MyArray<number>([1, 2, 3, 4, 5, 6]);
    myArrayString = new MyArray<string>(['Hola', 'mundo', 'como', 'estas']);
  });

  it("Un MyArray de numeros tiene items", () => {
    expect(myArrayNumber).to.be.an('object');
    expect(myArrayString).to.be.an('object');
  });

  it("MyArray se puede usar append", () => {
    myArrayNumber.append(new MyArray<number>([7,8,9]));
    myArrayString.append(new MyArray<string>(['buenos', 'dias']));
    expect(myArrayNumber.items).to.be.eql(new MyArray<number>([1,2,3,4,5,6,7,8,9]).items);
    expect(myArrayString.items).to.be.eql(new MyArray<string>(['Hola', 'mundo', 'como', 'estas', 'buenos', 'dias']).items);
  });

  it("MyArray se puede usar concatenate", () => {
    expect(myArrayNumber.concatenate(new MyArray<number>([7,8,9]), myArrayNumber).items).to.be.eql(new MyArray<number>([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]).items);
    expect(myArrayString.concatenate(new MyArray<string>(['buenos', 'dias']), myArrayString).items).to.be.eql(new MyArray<string>(['Hola', 'mundo', 'como', 'estas', 'buenos', 'dias', 'Hola', 'mundo', 'como', 'estas']).items);
  });

  it("MyArray se puede usar filter", () => {
    expect(myArrayNumber.filter((elem) => elem % 2 === 0).items).to.be.eql(new MyArray<number>([2, 4, 6]).items);
    expect(myArrayString.filter((elem) => elem.length % 2 === 0).items).to.be.eql(new MyArray<string>(['Hola', 'como']).items);
  });

  it("MyArray se puede saber el tamaño", () => {
    expect(myArrayNumber.length()).to.be.eql(6);
    expect(myArrayString.length()).to.be.eql(4);
  });

  it("MyArray se puede usar map", () => {
    expect(myArrayNumber.map((elem) => elem * 2).items).to.be.eql(new MyArray<number>([2, 4, 6, 8, 10, 12]).items);
    expect(myArrayString.map((elem) => elem.toUpperCase()).items).to.be.eql(new MyArray<string>(['HOLA', 'MUNDO', 'COMO', 'ESTAS']).items);
  });

  it("MyArray se puede usar map", () => {
    expect(myArrayNumber.reduce((acc, elem) => acc + '' + elem , '')).to.be.equal('123456');
    expect(myArrayString.reduce((acc, elem) => acc + '' + elem , '')).to.be.equal('Holamundocomoestas');
  });

  it("MyArray se puede usar reverse", () => {
    expect(myArrayNumber.reverse()).to.be.eql(new MyArray<number>([6,5,4,3,2,1]));
    expect(myArrayString.reverse()).to.be.eql(new MyArray<string>(['estas', 'como', 'mundo', 'Hola']));
  });

  it("MyArray se puede usar forEach", () => {
    let suma = 0;
    myArrayNumber.forEach((elem, indice) => {
      if (indice % 2 === 0) {
        suma += elem
      }
    });
    expect(suma).to.be.equal(9);
    let cadena = '';
    myArrayString.forEach((elem, indice) => {
      if (indice % 2 === 0) {
        cadena += elem
      }
    });
    expect(cadena).to.be.equal('Holacomo');
  });

});
