import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../api-base.service';
import { HeaderRequest } from '../interfaces/header-request.interface';

import { resources } from 'src/environments/resources';
import { environment } from 'src/environments/environment';
import { Signin } from './interface/signin.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private baseApiPath = environment.baseApiPath;

  constructor(private apiBaseService: ApiBaseService) {}

  public signin(user: Signin): Observable<any> {
    if (user === null) throw new Error('Required email or password to signin');

    const uri: string = `${resources.session.signin}`;

    return this.apiBaseService.post<any>(
      `${this.baseApiPath + uri}`,
      undefined,
      user,
      null
    );
  }

  // public signup(user: Signin): Observable<any> {
  //   if (user === null) throw new Error('Required email or password to signin');

  //   const headers: Array<HeaderRequest> = new Array<HeaderRequest>();
  //   headers.push({ param: 'Authorization', value: `Bearer ${user}` });

  //   const uri: string = `${resources.session.base}/${resources.session.signin}`;

  //   return this.apiBaseService.post<any>(
  //     `${this.baseApiPath + uri}`,
  //     headers,
  //     null,
  //     null
  //   );
  // }
}
