import 'mocha';
import { expect } from 'chai';
import { Solista } from "../../src/ejercicio-3/solista";
import { Discografia } from '../../src/ejercicio-3/discografia';
import { Disco } from '../../src/ejercicio-3/disco';
import { Single } from '../../src/ejercicio-3/single';


describe("Pruebas de Solista", () => {
    let solista: Solista;
  
    beforeEach(() => {
      solista = new Solista('Bejo', 562985, new Discografia<Disco, Single>([]));
    });
  
    it("Solista debe contener un nombre, numero de oyentes y discografia", () => {
      expect(solista).to.be.an('object');
      expect(solista.nombre).to.be.an('string');
      expect(solista.numOyentesMensuales).to.be.an('number');
      expect(solista.discografia).to.be.an('object');
    });
  
    it("Solista, se puede acceder a su nombre", () => {
      expect(solista.nombre).to.be.equal('Bejo');
    });
  
    it("Solista, se puede acceder a su numero de oyentes", () => {
      expect(solista.numOyentesMensuales).to.be.equal(562985);
    });
  
    it("Solista, se puede acceder a su discografia", () => {
      expect(solista.discografia.discografia).to.be.eql([]);
    });
  
});