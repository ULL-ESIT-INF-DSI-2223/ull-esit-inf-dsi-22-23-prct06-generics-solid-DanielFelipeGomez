import 'mocha';
import {expect} from 'chai';
import {BibliotecaMusical} from "../../src/ejercicio-3/biblioteca-musical";
import {Cancion} from "../../src/ejercicio-3/cancion";
import {Disco} from "../../src/ejercicio-3/disco";
import {Solista} from "../../src/ejercicio-3/solista";
import {Grupo} from "../../src/ejercicio-3/grupo";
import { Discografia } from '../../src/ejercicio-3/discografia';
import { Single } from '../../src/ejercicio-3/single';



describe("Pruebas de BibliotecaMusical", () => {
    // Las de Loco Playa
    const cancion1 = new Cancion('En Su Carro', 271, ['HipHop', 'Rap'], false, 14543926);
    const cancion2 = new Cancion('Canary Ass', 283, ['HipHop', 'Rap'], false, 14543926);
    const cancion3 = new Cancion('Vamoavé', 201, ['HipHop', 'Rap'], false, 14543926);
    const cancion4 = new Cancion('Qué Dice la Juventud', 217, ['HipHop', 'Rap'], false, 14543926);
    const cancion5 = new Cancion('Milikituli', 185, ['HipHop', 'Rap'], false, 14543926);
    const cancion6 = new Cancion('Crazy', 237, ['HipHop', 'Rap'], false, 14543926);
    // Las de Bejo
    const cancion7 = new Cancion('#RapSinCorte L', 503, ['HipHop', 'Rap'], true, 14543926);
    const cancion8 = new Cancion('Shin Chan', 223, ['HipHop', 'Rap'], false, 14543926);
    const cancion9 = new Cancion('Mucho', 121, ['HipHop', 'Rap'], true, 14543926);
    // Las mismas pero versiones distintas
    const cancion10 = new Cancion('Hello', 121, ['Romantic'], true, 123456);
    const cancion11 = new Cancion('Hello', 132, ['Romantic'], true, 678912);
    const cancion12 = new Cancion('Hello', 160, ['Romantic'], true, 543317);

    const disco1 = new Disco('Qué Dice la Juventud?', 2017, [cancion1, cancion2, cancion3, cancion4, cancion5, cancion6]);
    const single1 = new Single('Hello', 2017, [cancion10, cancion11, cancion12]);
    const grupo = new Grupo('Locoplaya', 158447, new Discografia([disco1]));
    const solista = new Solista('Bejo', 562985, new Discografia([]));
    const artistas = [solista, grupo];
    const discografia = new Discografia<Disco, Single>([disco1, single1]);
    const canciones = [cancion1, cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9];
    let bibliotecaMusical: BibliotecaMusical;
  
    beforeEach(() => {
      bibliotecaMusical = new BibliotecaMusical(artistas, discografia, canciones);
    });
  
    it("BibliotecaMusical debe contener un artistas, discos y canciones", () => {
      expect(bibliotecaMusical).to.be.an('object');
      expect(bibliotecaMusical.artistas).to.be.an('array');
      expect(bibliotecaMusical.discografia).to.be.an('object');
      expect(bibliotecaMusical.discografia.discografia).to.be.an('array');
      expect(bibliotecaMusical.canciones).to.be.an('array');
    });
  
    it("BibliotecaMusical, se puede acceder a sus artistas", () => {
      expect(bibliotecaMusical.artistas).to.be.eql(artistas);
    });
  
    it("BibliotecaMusical, se puede acceder a sus discografia", () => {
      expect(bibliotecaMusical.discografia.discografia).to.be.eql(discografia.discografia);
    });
  
    it("BibliotecaMusical, se puede acceder a sus canciones", () => {
      expect(bibliotecaMusical.canciones).to.be.eql(canciones);
    });
  
    it("BibliotecaMusical, se puede buscar un artista dando el nombre", () => {
      expect(bibliotecaMusical.buscarArtista('Bejo')).to.be.eql(solista);
    });
  
    it("BibliotecaMusical, se puede buscar un disco dando el nombre", () => {
      expect(bibliotecaMusical.buscarDiscografia('Qué Dice la Juventud?')).to.be.eql(disco1);
    });
  
    it("BibliotecaMusical, se puede buscar una cancion dando el nombre", () => {
      expect(bibliotecaMusical.buscarCancion('Crazy')).to.be.eql(cancion6);
    });
  
    it("BibliotecaMusical, se puede ver el numero de canciones en un disco dado", () => {
      expect(bibliotecaMusical.numCancionesEnDisco(disco1)).to.be.equal(6);
    });
  
    it("BibliotecaMusical, se puede ver la duracion total de un disco dado", () => {
      expect(bibliotecaMusical.duracionDisco(disco1)).to.be.equal(1394);
    });
  
    it("BibliotecaMusical, se puede ver el numero de reproducciones de un disco dado", () => {
      expect(bibliotecaMusical.numTotalReproduccionDisco(disco1)).to.be.equal(87263556);
    });

    it("BibliotecaMusical, se puede ver el numero de canciones en un single dado", () => {
      expect(bibliotecaMusical.numCancionesEnSingle(single1)).to.be.equal(3);
    });
  
    it("BibliotecaMusical, se puede ver la duracion total de un single dado", () => {
      expect(bibliotecaMusical.duracionSingle(single1)).to.be.equal(413);
    });
  
    it("BibliotecaMusical, se puede ver el numero de reproducciones de un single dado", () => {
      expect(bibliotecaMusical.numTotalReproduccionSingle(single1)).to.be.equal(1345685);
    });
  
  });