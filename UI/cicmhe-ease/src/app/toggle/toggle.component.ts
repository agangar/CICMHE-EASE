import { Component } from '@angular/core';
import { APICallsService } from '../../services/apicalls.service';


@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  title = 'app';
  
  constructor(private apiService:APICallsService) { }
  
  
  searchInProgress : boolean = false; 
  resultsAvailable : boolean = false;
  errorOccured : boolean = false;
  apiResponse:any = '';
  resultProducts:any='';
  filters:any='';
  productList:any='';
  companyList:any='';
  filterAvailable:boolean=false;
  productListAvailable:boolean=false;
  companyListAvailable:boolean=false;
  productSearchResultsAvailable:boolean=true;

  ngOnInit(){
    //Drop down population
      this.apiService.loadFilters().subscribe(
        response =>{
          this.filters = response;
          this.filterAvailable=true;
          console.log(this.filterAvailable);
          console.log(response);
        }, err=>{
          this.errorOccured = true;
          console.log("Error : " + JSON.stringify(err));
        }
      )

//List of products
      this.apiService.productList().subscribe(
        response =>{
          this.productList = response;
          this.productListAvailable=true;
          console.log(response);
        }, err=>{
          this.errorOccured = true;
          console.log("Error : " + JSON.stringify(err));
        }
      )

      //List of Company
      this.apiService.companyList().subscribe(
        response =>{
          this.companyList = response;
          this.companyListAvailable=true;
          console.log(response);
        }, err=>{
          this.errorOccured = true;
          console.log("Error : " + JSON.stringify(err));
        }
      )
  }





  //Drop down search
  public onInputs(inputQuery : string):void{
    this.resultsAvailable=false;
    this.searchInProgress=true;
    console.log(inputQuery);
    if(inputQuery=="All Products"){
      console.log("hiii");
        this.apiService.loadAllProducts().subscribe(
          response => { 
            this.apiResponse = response;
        },
        err => {
          this.errorOccured = true;
          this.searchInProgress = false;
          this.resultsAvailable=false;
          console.log("Error : " + JSON.stringify(err));
        });
        this.resultsAvailable = true;
        this.searchInProgress = false;
        this.resultProducts=this.productList;

    }else{
      this.productListAvailable=false;
    this.apiService.search(inputQuery).subscribe(
      response => { 
        this.apiResponse = response;
    },
    err => {
      this.errorOccured = true;
      this.searchInProgress = false;
      this.resultsAvailable=false;
      console.log("Error : " + JSON.stringify(err));
    });

  //checkbox products in results
    this.apiService.resultProducts(inputQuery).subscribe(
      response => { 
        this.productListAvailable=true;
        this.resultProducts = response;
        this.resultsAvailable = true;
        this.searchInProgress = false;
    },
    err => {
      console.log("Error : " + JSON.stringify(err));
    });
  }
  }




  //Search on product filter
  public onProducts(selectedProducts:string[]):void{
   
    this.productSearchResultsAvailable=false;
    this.searchInProgress = true;
    this.apiService.searchProduct(selectedProducts,selectedProducts.length).subscribe(
      response => { 
        this.productSearchResultsAvailable=true;
        this.searchInProgress = false;
        this.apiResponse = response;
        console.log(response);
        
    },
    err => {
      this.errorOccured = true;
      this.searchInProgress = false;
      this.resultsAvailable=false;
      console.log("Error : " + JSON.stringify(err));
    });

  }

  
}
