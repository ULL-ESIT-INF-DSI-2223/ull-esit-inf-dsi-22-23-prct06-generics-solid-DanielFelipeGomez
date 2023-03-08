import 'mocha';
import {expect} from 'chai';
import { StringPrintableCollection } from "../../src/ejercicio-pe/string-printable-collection";



// import {productTable} from "../src/ejercicio-3";

describe("Pruebas de StringPrintableCollection", () => {
  let stringCollectionPrintable: StringPrintableCollection;

  beforeEach(() => {
    stringCollectionPrintable = new StringPrintableCollection(['Hola', 'mundo', 'la', 'clasica']);
  });

  it("Una coleccion numrica imprimible debaria tener items", () => {
    expect(stringCollectionPrintable).to.be.an('object');
  });

  it("stringCollectionPrintable, se puede imprimir", () => {
    expect(stringCollectionPrintable.print()).to.be.equal('Hola mundo la clasica ');
  });

  it("stringCollectionPrintable, se pueden añadir elementos ", () => {
    expect(stringCollectionPrintable.print()).to.be.equal('Hola mundo la clasica ');
    stringCollectionPrintable.addItem('Final')
    expect(stringCollectionPrintable.print()).to.be.equal('Hola mundo la clasica Final ');
  });

  it("stringCollectionPrintable, se pueden remover elmeentos con su indice", () => {
    expect(stringCollectionPrintable.print()).to.be.equal('Hola mundo la clasica ');
    expect(stringCollectionPrintable.removeItem(0)).to.be.equal('mundo');
    expect(stringCollectionPrintable.print()).to.be.equal('mundo la clasica ');
  });

  it("stringCollectionPrintable, se pueden obtener eun elemento con su indice ", () => {
    expect(stringCollectionPrintable.print()).to.be.equal('Hola mundo la clasica ');
    expect(stringCollectionPrintable.getItem(0)).to.be.equal('Hola');
  });

  it("stringCollectionPrintable, se pueden obtenerel numero de elemntos", () => {
    expect(stringCollectionPrintable.getNumberOfItems()).to.be.equal(4);
  });

});
