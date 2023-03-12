import 'mocha';
import {expect} from 'chai';
import { Documentary } from "../../src/ejercicio-1/documentary";

describe("Pruebas de Documentary", () => {
  let documentary: Documentary;

  beforeEach(() => {
    documentary = new Documentary('Un Buen Documental', 2023, 'Animal', 9.8);
  });

  it("Un documentary es un objeto y tiene titulo, año de lanzamiento, género y puntuacion", () => {
    expect(documentary).to.be.an('object');
    expect(documentary.title).to.be.an('string');
    expect(documentary.year).to.be.an('number');
    expect(documentary.genre).to.be.an('string');
    expect(documentary.rating).to.be.an('number');

  });

  it("Documentary se puede acceder a sus atributos", () => {
    expect(documentary.title).to.be.equal('Un Buen Documental');
    expect(documentary.year).to.be.equal(2023);
    expect(documentary.genre).to.be.equal('Animal');
    expect(documentary.rating).to.be.equal(9.8);
  });

  it("Documentary no se puede poner un rating mayor a 10 o menor a 0", () => {
    expect(new Documentary('A', 2020, 'B', 100).rating).to.be.equal(10);
    expect(new Documentary('A', 2020, 'B', -1000).rating).to.be.equal(0);
  });

  it("Documentary se puede imprimir con formato", () => {
    expect(documentary.print()).to.be.equal('   Un Buen Documental\n    YEAR -> 2023\n    GENRE -> Animal\n    RATINGT -> 9.8\n\n');
  });

});