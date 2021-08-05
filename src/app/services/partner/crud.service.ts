import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiBaseService } from '../api-base.service';
import { HeaderRequest } from '../interfaces/header-request.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> {
  protected baseApiPath = environment.baseApiPath;

  constructor(protected apiBaseService: ApiBaseService, public uri: String) {}

  public registerRecord(record: any, userToken: string): Observable<any> {
    if (record === null) throw new Error('Required record to register');

    const headers: Array<HeaderRequest> = new Array<HeaderRequest>();
    headers.push({ param: 'Authorization', value: `Bearer ${userToken}` });

    const uri: string = `${this.uri}`;

    console.log(this.baseApiPath + uri);

    return this.apiBaseService.post<T>(
      `${this.baseApiPath + uri}`,
      headers,
      record,
      null
    );
  }

  public updateRecord(
    recordId: string,
    record: any,
    userToken: string
  ): Observable<any> {
    if (record === null) throw new Error('Required record to register');

    const headers: Array<HeaderRequest> = new Array<HeaderRequest>();
    headers.push({ param: 'Authorization', value: `Bearer ${userToken}` });

    const uri: string = `${this.uri}/${recordId}`;

    console.log(this.baseApiPath + uri);

    return this.apiBaseService.put<T>(
      `${this.baseApiPath + uri}`,
      headers,
      record,
      null
    );
  }

  public deleteRecord(record: string, userToken: string): Observable<any> {
    if (record === null) throw new Error('Required record to register');

    const headers: Array<HeaderRequest> = new Array<HeaderRequest>();
    headers.push({ param: 'Authorization', value: `Bearer ${userToken}` });

    const uri: string = `${this.uri}/${record}`;

    console.log(this.baseApiPath + uri);

    return this.apiBaseService.delete<T>(`${this.baseApiPath + uri}`, headers);
  }

  public getAllRecord(userToken: string): Observable<any> {
    if (userToken === null) throw new Error('Required userToken to register');

    const headers: Array<HeaderRequest> = new Array<HeaderRequest>();
    headers.push({ param: 'Authorization', value: `Bearer ${userToken}` });

    const uri: string = `${this.uri}`;

    console.log(this.baseApiPath + uri);

    return this.apiBaseService.get<T>(
      `${this.baseApiPath + uri}`,
      headers,
      null
    );
  }

  public getAllRecordNoToken(): Observable<any> {
    const uri: string = `${this.uri}`;

    return this.apiBaseService.get<T>(
      `${this.baseApiPath + uri}`,
      undefined,
      null
    );
  }

  public getRecordByIdNoToken(record: string): Observable<any> {
    const uri: string = `${this.uri}/${record}`;

    console.log(this.baseApiPath + uri);

    return this.apiBaseService.get<T>(
      `${this.baseApiPath + uri}`,
      undefined,
      null
    );
  }

  public getRecordById(record: string, userToken: string): Observable<any> {
    if (record === null) throw new Error('Required record to register');

    const headers: Array<HeaderRequest> = new Array<HeaderRequest>();
    headers.push({ param: 'Authorization', value: `Bearer ${userToken}` });

    const uri: string = `${this.uri}/${record}`;

    console.log(this.baseApiPath + uri);

    return this.apiBaseService.get<T>(
      `${this.baseApiPath + uri}`,
      headers,
      null
    );
  }
}
