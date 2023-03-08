import 'mocha';
import {expect} from 'chai';
import { NumericPrintableCollection } from "../src/ejercicio-pe/numeric-printable-collection";



// import {productTable} from "../src/ejercicio-3";

describe("Pruebas de NumericPrintableCollection", () => {
  let numberCollectionPrintable: NumericPrintableCollection;

  beforeEach(() => {
    numberCollectionPrintable = new NumericPrintableCollection([1,2,3,4,5,6,7,8]);
  });

  it("Una coleccion numrica imprimible debaria tener items", () => {
    expect(numberCollectionPrintable).to.be.an('object');
  });

  it("numberCollectionPrintable, se puede imprimir", () => {
    expect(numberCollectionPrintable.print()).to.be.equal('1, 2, 3, 4, 5, 6, 7, 8, ');
  });

  it("numberCollectionPrintable, se pueden añadir elementos ", () => {
    expect(numberCollectionPrintable.print()).to.be.equal('1, 2, 3, 4, 5, 6, 7, 8, ');
    numberCollectionPrintable.addItem(2)
    expect(numberCollectionPrintable.print()).to.be.equal('1, 2, 3, 4, 5, 6, 7, 8, 2, ');
  });

  it("numberCollectionPrintable, se pueden remover elmeentos con su indice", () => {
    expect(numberCollectionPrintable.print()).to.be.equal('1, 2, 3, 4, 5, 6, 7, 8, ');
    expect(numberCollectionPrintable.removeItem(0)).to.be.equal(2);
    expect(numberCollectionPrintable.print()).to.be.equal('2, 3, 4, 5, 6, 7, 8, ');
  });

  it("numberCollectionPrintable, se pueden obtener eun elemento con su indice ", () => {
    expect(numberCollectionPrintable.print()).to.be.equal('1, 2, 3, 4, 5, 6, 7, 8, ');
    expect(numberCollectionPrintable.getItem(0)).to.be.equal(1);
  });

  it("numberCollectionPrintable, se pueden obtenerel numero de elemntos", () => {
    expect(numberCollectionPrintable.getNumberOfItems()).to.be.equal(8);
  });

});
