import { Observable, of } from "rxjs";
import CafeFakeData from 'src/test/fake-data/lista-cafe-fake.json';
import { Cafe } from "src/app/modulos/cafe/cafe";


export class ArtistListRestServiceMock {

  obtenerListaCafes(): Observable<Cafe[]> {
    return of(CafeFakeData.datos);
  }

}
