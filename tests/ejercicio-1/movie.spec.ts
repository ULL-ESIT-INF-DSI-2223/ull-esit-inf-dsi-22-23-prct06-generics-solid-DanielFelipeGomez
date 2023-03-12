import 'mocha';
import {expect} from 'chai';
import { Movie } from "../../src/ejercicio-1/movie";

describe("Pruebas de Movie", () => {
  let movie: Movie;

  beforeEach(() => {
    movie = new Movie('Una Buen Pelicula', 2023, 'Acción', 7.6);
  });

  it("Un Movie es un objeto y tiene titulo, año de lanzamiento, género y puntuacion", () => {
    expect(movie).to.be.an('object');
    expect(movie.title).to.be.an('string');
    expect(movie.year).to.be.an('number');
    expect(movie.genre).to.be.an('string');
    expect(movie.rating).to.be.an('number');

  });

  it("Movie se puede acceder a sus atributos", () => {
    expect(movie.title).to.be.equal('Una Buen Pelicula');
    expect(movie.year).to.be.equal(2023);
    expect(movie.genre).to.be.equal('Acción');
    expect(movie.rating).to.be.equal(7.6);
  });

  it("Movie no se puede poner un rating mayor a 10 o menor a 0", () => {
    expect(new Movie('A', 2020, 'B', 100).rating).to.be.equal(10);
    expect(new Movie('A', 2020, 'B', -1000).rating).to.be.equal(0);
  });

  it("Movie se puede imprimir con formato", () => {
    expect(movie.print()).to.be.equal('   Una Buen Pelicula\n    YEAR -> 2023\n    GENRE -> Acción\n    RATINGT -> 7.6\n\n');
  });

});