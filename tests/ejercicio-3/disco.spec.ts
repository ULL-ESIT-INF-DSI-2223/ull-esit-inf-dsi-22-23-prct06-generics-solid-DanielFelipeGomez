import 'mocha';
import {expect} from 'chai';
import {Disco} from "../../src/ejercicio-3/disco";



describe("Pruebas de Disco", () => {
    let disco: Disco;
  
    beforeEach(() => {
      disco = new Disco('Qué Dice la Juventud?', 2017, []);
    });
  
    it("Disco debe contener un nombre, año de publicacion y lista de canciones", () => {
      expect(disco).to.be.an('object');
      expect(disco.nombre).to.be.an('string');
      expect(disco.temporadaPublicacion).to.be.an('number');
      expect(disco.canciones).to.be.an('array');
    });
  
    it("Disco, se puede acceder a su nombre", () => {
      expect(disco.nombre).to.be.equal('Qué Dice la Juventud?');
    });
  
    it("Disco, se puede acceder a su año de publicacion", () => {
      expect(disco.temporadaPublicacion).to.be.equal(2017);
    });
  
    it("Disco, se puede acceder a su lista de canciones", () => {
      expect(disco.canciones).to.be.eql([]);
    });
  
});