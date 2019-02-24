import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const apiURL = "http://localhost:8081/api/";

@Injectable({
  providedIn: 'root'
})
export class APICallsService {

  constructor(private httpClient: HttpClient) { }

  // Drop-down Search
  public search(query: string, pageSize:number,pageIndex:number) {
    var URL = apiURL + "search";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('query', query).set('pageSize',pageSize.toString()).set('pageIndex', pageIndex.toString());

    return this.httpClient.get(URL, { headers, params });
  }

  //Drop-down Populate
  public loadFilters() {
    var URL = apiURL + "filters";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    return this.httpClient.get(URL, { headers, params });
  }

  // List of all products
  public productList() {
    var URL = apiURL + "allproducts";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    return this.httpClient.get(URL, { headers, params });
  }


  // List of all company
  public companyList() {
    var URL = apiURL + "companyList";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    return this.httpClient.get(URL, { headers, params });
  }

  // List of products in results
  public resultProducts(query: string) {
    var URL = apiURL + "resultProducts";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('query', query);

    return this.httpClient.get(URL, { headers, params });
  }

  // Serch from product List
  public searchProduct(query: string[], length: number,pageSize:number,pageIndex:number) {
    var URL = apiURL + "productSearch";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params = params.set('length', length.toString()).set('pageSize',pageSize.toString()).set('pageIndex', pageIndex.toString());
    let count = 0;
    for (let x of query)
      params = params.set((count++).toString(), x);
    return this.httpClient.get(URL, { headers, params });
  }

  //Show results for all Products
  public loadAllProducts(pageSize:number,pageIndex:number) {
    var URL = apiURL + "allProductSearch";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('pageSize',pageSize.toString()).set('pageIndex', pageIndex.toString());
    return this.httpClient.get(URL, { headers, params });
  }

  //All products count
  public allProductsCount(){
    var URL = apiURL + "allProductsCount";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    return this.httpClient.get(URL, { headers, params });
  }

  //drop Down Result Count
  public dropDownResultCount(query: string) {
    var URL = apiURL + "dropDownResultCount";
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('query', query);

    return this.httpClient.get(URL, { headers, params });
  }

    //Product search Result Count
    public productSearchCount(query: string[], length: number) {
      var URL = apiURL + "productCount";
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      let params = new HttpParams();
      params = params.set('length', length.toString());
      let count = 0;
      for (let x of query)
         params = params.set((count++).toString(), x);
      return this.httpClient.get(URL, { headers, params });
    }

}
