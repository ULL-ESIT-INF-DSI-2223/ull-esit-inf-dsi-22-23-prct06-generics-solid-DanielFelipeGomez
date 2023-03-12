import 'mocha';
import {expect} from 'chai';
import {Cancion} from "../../src/ejercicio-3/cancion";




describe("Pruebas de Cancion", () => {
    let cancion: Cancion;
  
    beforeEach(() => {
      cancion = new Cancion('Crazy', 237, ['HipHop', 'Rap'], false, 14543926);
    });
  
    it("Cancion debe contener un nombre, numero de oyentes y Cancion", () => {
      expect(cancion).to.be.an('object');
      expect(cancion.nombre).to.be.an('string');
      expect(cancion.duracionSegundos).to.be.an('number');
      expect(cancion.generos).to.be.an('array');
      expect(cancion.single).to.be.an('boolean');
      expect(cancion.numReproduciones).to.be.an('number');
  
    });
  
    it("Cancion, se puede acceder a su nombre", () => {
      expect(cancion.nombre).to.be.equal('Crazy');
    });
  
    it("Cancion, se puede acceder a su numero de oyentes", () => {
      expect(cancion.duracionSegundos).to.be.equal(237);
    });
  
    it("Cancion, se puede acceder a su Cancion", () => {
      expect(cancion.generos).to.be.eql(['HipHop', 'Rap']);
    });
  
    it("Cancion, se puede acceder a su Cancion", () => {
      expect(cancion.single).to.be.equal(false);
    });
  
    it("Cancion, se puede acceder a su Cancion", () => {
      expect(cancion.numReproduciones).to.be.equal(14543926);
    });
  
});