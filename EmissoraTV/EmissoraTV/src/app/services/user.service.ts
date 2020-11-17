import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './models/user';
import { UserLogin } from './models/userLogin';
import { ProviderService } from './providers/provider.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ProviderService{
  private http: HttpClient;

  constructor(_http: HttpClient) 
  { 
    super("User");
    this.http = _http;
  }

  register(email: string, password: string, name: string, profileId: number)
  {
    const userLogin = new User(email, password, name, profileId);
    const data = JSON.stringify(userLogin);

    return this.http.post<any>(`${this.url}`, JSON.parse(data),{})
            .pipe(map(user => {
              return user;
            }))
  }
}
