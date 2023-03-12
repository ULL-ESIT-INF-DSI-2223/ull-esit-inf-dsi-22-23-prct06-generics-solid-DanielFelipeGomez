import 'mocha';
import {expect} from 'chai';
import { Serie } from "../../src/ejercicio-1/serie";

describe("Pruebas de Serie", () => {
  let serie: Serie;

  beforeEach(() => {
    serie = new Serie('Una Buen Serie', 2023, 'Comedia', 8.5);
  });

  it("Un Serie es un objeto y tiene titulo, año de lanzamiento, género y puntuacion", () => {
    expect(serie).to.be.an('object');
    expect(serie.title).to.be.an('string');
    expect(serie.year).to.be.an('number');
    expect(serie.genre).to.be.an('string');
    expect(serie.rating).to.be.an('number');

  });

  it("Serie se puede acceder a sus atributos", () => {
    expect(serie.title).to.be.equal('Una Buen Serie');
    expect(serie.year).to.be.equal(2023);
    expect(serie.genre).to.be.equal('Comedia');
    expect(serie.rating).to.be.equal(8.5);
  });

  it("Serie no se puede poner un rating mayor a 10 o menor a 0", () => {
    expect(new Serie('A', 2020, 'B', 100).rating).to.be.equal(10);
    expect(new Serie('A', 2020, 'B', -1000).rating).to.be.equal(0);
  });

  it("Serie se puede imprimir con formato", () => {
    expect(serie.print()).to.be.equal('   Una Buen Serie\n    YEAR -> 2023\n    GENRE -> Comedia\n    RATINGT -> 8.5\n\n');
  });

});