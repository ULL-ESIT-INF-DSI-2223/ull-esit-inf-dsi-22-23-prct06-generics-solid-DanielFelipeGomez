import 'mocha';
import {expect} from 'chai';
import { DocumentariesCollection } from "../../src/ejercicio-1/documentaries-collection";
import { Documentary } from '../../src/ejercicio-1/documentary';

describe("Pruebas de DocumentariesCollection", () => {
  let docuCollection: DocumentariesCollection;
  let docu1: Documentary;
  let docu2: Documentary;


  beforeEach(() => {
    docu1 = new Documentary('HolaDocumentary', 2021, 'Documental', 8.6);
    docu2 = new Documentary('chaoDocumentary', 1921, 'NoTanDocu', 6.6);
    docuCollection = new DocumentariesCollection([docu1, docu2]);
  });

  it("Un DocumentariesCollection es un objeto y tiene una array de Documentary", () => {
    expect(docuCollection).to.be.an('object');
    expect(docuCollection.collection).to.be.an('array');
  });

  it("DocumentariesCollection se puede acceder mediante un get a la collecion", () => {
    let docu1 = new Documentary('HolaDocumentary', 2021, 'Documental', 8.6);
    let docu2 = new Documentary('chaoDocumentary', 1921, 'NoTanDocu', 6.6);
    expect(docuCollection.collection).to.be.eql([docu1, docu2]);
  });

  it("DocumentariesCollection se puede imprimir con formato", () => {
    let docu1 = new Documentary('HolaDocumentary', 2021, 'Documental', 8.6);
    expect(new DocumentariesCollection([docu1]).print()).to.be.equal('Documentaries\n ' + docu1.print() + '\n');
  });

  it("DocumentariesCollection se puede añadir una documentary", () => {
    const docu3 = new Documentary('A', 2002, 'B', 3.6)
    expect(docuCollection.add(docu3)).to.be.equal(true);
    expect(docuCollection.collection).to.be.eql([docu1, docu2, docu3]);
  });

  it("DocumentariesCollection se puede eliminar un elemento dado su indice", () => {
    expect(docuCollection.delete(1)).to.be.equal(docu2);
    expect(docuCollection.collection).to.be.eql([docu1]);
  });

  it("DocumentariesCollection se puede buscar un elemento dado su titulo", () => {
    expect(docuCollection.searchByTitle('HolaDocumentary')).to.be.equal(docu1);
    expect(docuCollection.searchByTitle('NombreFalso')).to.be.equal(undefined);

  });

  it("DocumentariesCollection se puede buscar un elemento dado su year", () => {
    expect(docuCollection.searchByYear(2021)).to.be.eql([docu1]);
    expect(docuCollection.searchByYear(1888)).to.be.eql([]);
  });

  it("DocumentariesCollection se puede buscar un elemento dado su genero", () => {
    expect(docuCollection.searchByGenre('Documental')).to.be.eql([docu1]);
    expect(docuCollection.searchByGenre('GeneroNoExistente')).to.be.eql([]);
  });

  it("DocumentariesCollection se puede buscar un elemento dado su rating", () => {
    expect(docuCollection.searchByRating(8.6)).to.be.eql([docu1]);
    expect(docuCollection.searchByRating(4.5)).to.be.eql([]);
  });

});