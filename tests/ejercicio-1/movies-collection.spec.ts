import 'mocha';
import {expect} from 'chai';
import { MoviesCollection } from "../../src/ejercicio-1/movies-collection";
import { Movie } from '../../src/ejercicio-1/movie';

describe("Pruebas de MoviesCollection", () => {
  let movieCollection: MoviesCollection;
  let movie1: Movie;
  let movie2: Movie;

  beforeEach(() => {
    movie1 = new Movie('HolaMovie', 2022, 'ActionMovie', 9.7);
    movie2 = new Movie('chaoMovie', 1922, 'AburridaMovie', 6.7);
    movieCollection = new MoviesCollection([movie1, movie2]);
  });

  it("Un MoviesCollection es un objeto y tiene una array de Movie", () => {
    expect(movieCollection).to.be.an('object');
    expect(movieCollection.collection).to.be.an('array');
  });

  it("MoviesCollection se puede acceder mediante un get a la collecion", () => {
    let movie1 = new Movie('HolaMovie', 2022, 'ActionMovie', 9.7);
    let movie2 = new Movie('chaoMovie', 1922, 'AburridaMovie', 6.7);
    expect(movieCollection.collection).to.be.eql([movie1, movie2]);
  });

  it("MoviesCollection se puede imprimir con formato", () => {
    let movie1 = new Movie('HolaMovie', 2022, 'ActionMovie', 9.7);
    expect(new MoviesCollection([movie1]).print()).to.be.equal('Movies\n ' + movie1.print() + '\n');
  });

  it("MoviesCollection se puede añadir una movie", () => {
    const movie3 = new Movie('A', 2002, 'B', 3.6)
    expect(movieCollection.add(movie3)).to.be.equal(true);
    expect(movieCollection.collection).to.be.eql([movie1, movie2, movie3]);
  });

  it("MoviesCollection se puede eliminar un elemento dado su indice", () => {
    expect(movieCollection.delete(1)).to.be.equal(movie2);
    expect(movieCollection.collection).to.be.eql([movie1]);
  });

  it("MoviesCollection se puede buscar un elemento dado su titulo", () => {
    expect(movieCollection.searchByTitle('HolaMovie')).to.be.equal(movie1);
    expect(movieCollection.searchByTitle('NombreFalso')).to.be.equal(undefined);

  });

  it("MoviesCollection se puede buscar un elemento dado su year", () => {
    expect(movieCollection.searchByYear(2022)).to.be.eql([movie1]);
    expect(movieCollection.searchByYear(1888)).to.be.eql([]);
  });

  it("MoviesCollection se puede buscar un elemento dado su genero", () => {
    expect(movieCollection.searchByGenre('ActionMovie')).to.be.eql([movie1]);
    expect(movieCollection.searchByGenre('GeneroNoExistente')).to.be.eql([]);
  });

  it("MoviesCollection se puede buscar un elemento dado su rating", () => {
    expect(movieCollection.searchByRating(9.7)).to.be.eql([movie1]);
    expect(movieCollection.searchByRating(4.5)).to.be.eql([]);
  });

});