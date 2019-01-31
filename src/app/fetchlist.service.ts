import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Iuserobject } from './iuserobject';
import { HttpClient } from "@angular/common/http";
import { Ifetch } from './ifetch';
import { Ifetchdata } from "./ifetchdata";
import { Userdata } from './userdata';
@Injectable({
  providedIn: 'root'
})
export class FetchlistService {

  constructor(private httpclient: HttpClient) { }
  data:Ifetchdata;
  private url: string = 'https://reqres.in/api/users?page=';
  private url1: string = 'https://reqres.in/api/users/';
  fetchlist(page): Observable<Ifetch> {
    return this.httpclient.get<Ifetch>(this.url + page).
    pipe(
      retry(1),
      catchError(this.handleError)
);
  }
  fetchuser(id): Observable<Iuserobject> {
    return this.httpclient.get<Iuserobject>(this.url1 + id).pipe(
      retry(1),
      catchError(this.handleError)
);
}
  deletedata(array): Observable<Ifetchdata> {
    return this.httpclient.delete<Ifetchdata>(this.url1 + '/' + array.id);
  }
  putdata(id,fetchdata):Observable<Userdata>{
    return this.httpclient.put<Userdata>((this.url1+id), {"first_name" : fetchdata.first_name ,"last_name" :fetchdata.last_name});
  }
  postdata(fetchdata):Observable<Userdata>{
    return this.httpclient.post<Userdata>("https://reqres.in/api/users", {"first_name" : fetchdata.first_name ,"last_name":fetchdata.last_name,"avatar":null});
  }
  handleError() {
    let errorMessage = "Please connect to the internet.";
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
