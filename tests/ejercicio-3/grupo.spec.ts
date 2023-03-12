import 'mocha';
import { expect } from 'chai';
import { Grupo } from "../../src/ejercicio-3/grupo";
import { Discografia } from '../../src/ejercicio-3/discografia';
import { Single } from '../../src/ejercicio-3/single';
import { Disco } from '../../src/ejercicio-3/disco';



describe("Pruebas de Grupo", () => {
    let grupo: Grupo;
  
    beforeEach(() => {
      grupo = new Grupo('Locoplaya', 158447, new Discografia<Disco, Single>([]));
    });
  
    it("Grupo debe contener un nombre, numero de oyentes y discografia", () => {
      expect(grupo).to.be.an('object');
      expect(grupo.nombre).to.be.an('string');
      expect(grupo.numOyentesMensuales).to.be.an('number');
      expect(grupo.discografia).to.be.an('object');
    });
  
    it("Grupo, se puede acceder a su nombre", () => {
      expect(grupo.nombre).to.be.equal('Locoplaya');
    });
  
    it("Grupo, se puede acceder a su numero de oyentes", () => {
      expect(grupo.numOyentesMensuales).to.be.equal(158447);
    });
  
    it("Grupo, se puede acceder a su discografia", () => {
      expect(grupo.discografia.discografia).to.be.eql([]);
    });
  
});