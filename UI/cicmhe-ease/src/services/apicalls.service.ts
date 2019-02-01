import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const apiURL = "http://localhost:8081/api/";

@Injectable({
  providedIn: 'root'
})
export class APICallsService {

  constructor(private httpClient : HttpClient) { }

  public search(query : string){
    var URL = apiURL + "search";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('query', query);

    return this.httpClient.get(URL, {headers, params});
  }

  public loadFilters(){
    var URL = apiURL + "filters";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    return this.httpClient.get(URL, {headers, params});
  }

  public productList(){
    var URL = apiURL + "allproducts";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    return this.httpClient.get(URL, {headers, params});
  }
}
