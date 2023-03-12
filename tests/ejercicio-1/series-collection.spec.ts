import 'mocha';
import {expect} from 'chai';
import { SeriesCollection } from "../../src/ejercicio-1/series-collection";
import { Serie } from '../../src/ejercicio-1/serie';

describe("Pruebas de SeriesCollection", () => {
  let serieCollection: SeriesCollection;
  let serie1: Serie; 
  let serie2: Serie; 

  beforeEach(() => {
    serie1 = new Serie('HolaSerie', 2020, 'Programming', 9.9);
    serie2 = new Serie('chaoSerie', 1920, 'Aburrida', 7.9);
    serieCollection = new SeriesCollection([serie1, serie2]);
    });

  it("Un SeriesCollection es un objeto y tiene una array de Serie", () => {
    expect(serieCollection).to.be.an('object');
    expect(serieCollection.collection).to.be.an('array');
  });

  it("SeriesCollection se puede acceder mediante un get a la collecion", () => {
    let serie1 = new Serie('HolaSerie', 2020, 'Programming', 9.9);
    let serie2 = new Serie('chaoSerie', 1920, 'Aburrida', 7.9);
    expect(serieCollection.collection).to.be.eql([serie1, serie2]);
  });

  it("SeriesCollection se puede imprimir con formato", () => {
    let serie1 = new Serie('HolaSerie', 2020, 'Programming', 9.9);
    expect(new SeriesCollection([serie1]).print()).to.be.equal('Series\n ' + serie1.print() + '\n');
  });

  it("SeriesCollection se puede añadir una serie", () => {
    const serie3 = new Serie('A', 2002, 'B', 3.6)
    expect(serieCollection.add(serie3)).to.be.equal(true);
    expect(serieCollection.collection).to.be.eql([serie1, serie2, serie3]);
  });

  it("SeriesCollection se puede eliminar un elemento dado su indice", () => {
    expect(serieCollection.delete(1)).to.be.equal(serie2);
    expect(serieCollection.collection).to.be.eql([serie1]);
  });

  it("SeriesCollection se puede buscar un elemento dado su titulo", () => {
    expect(serieCollection.searchByTitle('HolaSerie')).to.be.equal(serie1);
    expect(serieCollection.searchByTitle('NombreFalso')).to.be.equal(undefined);

  });

  it("SeriesCollection se puede buscar un elemento dado su year", () => {
    expect(serieCollection.searchByYear(2020)).to.be.eql([serie1]);
    expect(serieCollection.searchByYear(1888)).to.be.eql([]);
  });

  it("SeriesCollection se puede buscar un elemento dado su genero", () => {
    expect(serieCollection.searchByGenre('Programming')).to.be.eql([serie1]);
    expect(serieCollection.searchByGenre('GeneroNoExistente')).to.be.eql([]);
  });

  it("SeriesCollection se puede buscar un elemento dado su rating", () => {
    expect(serieCollection.searchByRating(9.9)).to.be.eql([serie1]);
    expect(serieCollection.searchByRating(4.5)).to.be.eql([]);
  });

});