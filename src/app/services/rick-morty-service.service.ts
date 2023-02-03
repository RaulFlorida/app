import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../interface/interfaceRickyMorty';
import { Locations } from '../interface/interfaceRickyMorty';
import { Episodes } from '../interface/interfaceRickyMorty';

@Injectable({
  providedIn: 'root'
})
export class RickMortyServiceService {

  constructor(public http: HttpClient) { }

  private url: string = 'https://rickandmortyapi.com/api/';

  public getCharacters(nombre: string): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.url+"character/?name="+nombre)
  }

  public getLocations(nombre: string): Observable<Locations[]> {
    return this.http.get<Locations[]>(this.url+"location/"+nombre)
  }

  public getEpisodes(nombre: string): Observable<Episodes[]> {
    return this.http.get<Episodes[]>(this.url+"episode/"+nombre)
  }
    
}
