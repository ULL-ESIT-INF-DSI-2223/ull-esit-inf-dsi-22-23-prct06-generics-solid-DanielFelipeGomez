import 'mocha';
import {expect} from 'chai';
import {Single} from "../../src/ejercicio-3/single";



describe("Pruebas de Single", () => {
    let single: Single;
  
    beforeEach(() => {
      single = new Single('Qué Dice la Juventud?', 2017, []);
    });
  
    it("Single debe contener un nombre, año de publicacion y lista de versiones", () => {
      expect(single).to.be.an('object');
      expect(single.nombre).to.be.an('string');
      expect(single.temporadaPublicacion).to.be.an('number');
      expect(single.versiones).to.be.an('array');
    });
  
    it("Single, se puede acceder a su nombre", () => {
      expect(single.nombre).to.be.equal('Qué Dice la Juventud?');
    });
  
    it("Single, se puede acceder a su año de publicacion", () => {
      expect(single.temporadaPublicacion).to.be.equal(2017);
    });
  
    it("Single, se puede acceder a su lista de versiones", () => {
      expect(single.versiones).to.be.eql([]);
    });
  
});