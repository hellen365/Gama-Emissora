import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Actor } from '../models/actor';
import { ProviderService } from '../providers/provider.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService extends ProviderService {
  private http: HttpClient;

  constructor(_http: HttpClient) 
  { 
    super("Actor");
    this.http = _http;
  }

  register(generesId: number[], sex: string, salary: number, userId:number)
  {
    const actor  = new Actor(generesId, sex, salary, 1, userId);
    const data = JSON.stringify(actor);

    return this.http.post<any>(`${this.url}`, JSON.parse(data),{})
            .pipe(map(actor => {
              return actor;
            }))
  }

  list() {
    return this.http.get<any>(`${this.url}`,{})
            .pipe(map(actors => {
              console.log(actors)
              return actors;
            }))
  }
}
