import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
const CUST_URL = environment.ipUrl;

@Injectable()
export class ApiService {

  environmentConfig = {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    // environment: any,
    private http: HttpClient,
    // apiUri: string,
    // displayName: string,
  ) {
    // super(
    //   environmentConfig,
    //   http,
    //   '/MSVC/Search.svc/SearchEvent/${languageCode}/${clientCode}', // Note: not using backticks on purpose
    //   'searchEvent',
    //   ['Search.M'],
    // );

  }

  //
  public login(username: string, password: string): Observable<any> {

    return this.http
      .get(API_URL + 'login?username=' + username + '&credential=' + password)
      .pipe(
        tap(_ => console.log('fetched'))

      )
  }

  public logout(sessionId: string): Observable<any> {
    return this.http
      .get(API_URL + 'logout?key=' + sessionId)
      .pipe(
        tap(_ => console.log('fetched'))

      );
  }

  public createCustomer(name, age, address): Observable<any> {
    const body = {
      customerName: name,
      customerAge: age,
      customerAddress: address,
    };

    return this.http.post<any>(CUST_URL, body, this.httpOptions).pipe(
      tap((newCustomer: any) => console.log(`added hero w/ id=${newCustomer}`))

    );
  }
  // http://{IP}:8300/gktest/createCustomer?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4g RG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  // (Replace the { IP } in the API with the given IP address)
  // Sample JSON Body: { "customerName": "gk", "customerAge": 23, "customerAddress": "Greenkoncepts,Singapore" }

  public getHierarchy(sessionKey) {
    https://kem.greenkoncepts.com/ems/mvc/node-hierarchy-with-metadata?key={sessionKey}
    return this.http
      .get('https://kem.greenkoncepts.com/ems/mvc/node-hierarchy-with-metadata?key=' + sessionKey)
      .pipe(
        tap(_ => console.log('fetched'))
      );
  }

}
