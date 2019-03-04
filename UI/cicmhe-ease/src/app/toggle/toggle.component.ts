import { Component } from '@angular/core';
import { APICallsService } from '../../services/apicalls.service';


@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  title = 'app';

  constructor(private apiService: APICallsService) { }

  searchonProducts: boolean = false;
  searchInProgress: boolean = false;
  searchQuery: string;
  resultsAvailable: boolean = false;
  errorOccured: boolean = false;
  apiResponse: any = '';
  resultProducts: any = '';
  filters: any = '';
  productCompanyList:any='';
  productList: any = '';
  companyList: any = '';
  filterAvailable: boolean = false;
  productListAvailable: boolean = false;
  companyListAvailable: boolean = false;
  productSearchResultsAvailable: boolean = true;
  resultCount: any;


  ngOnInit() {
    //Drop down population
    this.apiService.loadFilters().subscribe(
      response => {
        this.filters = response;
        this.filterAvailable = true;
      }, err => {
        this.errorOccured = true;
        console.log("Error : " + JSON.stringify(err));
      }
    )

    //List of products
    this.apiService.productList().subscribe(
      response => {
        this.productList = response;
        this.productListAvailable = true;
        console.log(response);
      }, err => {
        this.errorOccured = true;
        console.log("Error : " + JSON.stringify(err));
      }
    )

    //List of Company
    this.apiService.companyList().subscribe(
      response => {
        this.companyList = response;
        this.companyListAvailable = true;
      }, err => {
        this.errorOccured = true;
        console.log("Error : " + JSON.stringify(err));
      }
    )
  }





  //Drop down search
  public onInputs(inputQuery: any): void {
    
    this.searchInProgress = true;
    if (inputQuery[3] == 0) {
      this.searchonProducts = false;
    }
    if (this.searchonProducts) {
      this.productPaginator(inputQuery);
    }

    this.searchQuery = inputQuery[0];
    //count
    if (inputQuery[0] == "All Products") {
      this.apiService.allProductsCount().subscribe(
        response => {
          this.resultCount = response;
        },
        err => {
          this.errorOccured = true;
          this.resultsAvailable = false;
          console.log("Error : " + JSON.stringify(err));
        });

      //results
      this.apiService.loadAllProducts(inputQuery[1], inputQuery[2]).subscribe(
        response => {
          this.apiResponse = response;
          this.resultsAvailable = true;
          this.resultProducts = this.productList;
          this.prodCompanyList();
        },
        err => {
          this.errorOccured = true;
          this.searchInProgress = false;
          this.resultsAvailable = false;
          console.log("Error : " + JSON.stringify(err));
        });

        
  
      


    } else {
      this.productListAvailable = false;
      //count
      this.apiService.dropDownResultCount(inputQuery[0]).subscribe(
        response => {
          this.resultCount = response;
        },
        err => {
          this.errorOccured = true;
          this.resultsAvailable = false;
          console.log("Error : " + JSON.stringify(err));
        });

      //results
      this.apiService.search(inputQuery[0], inputQuery[1], inputQuery[2]).subscribe(
        response => {
          this.apiResponse = response;
        },
        err => {
          this.errorOccured = true;
          this.searchInProgress = false;
          this.resultsAvailable = false;
          console.log("Error : " + JSON.stringify(err));
        });

      //checkbox products in results
      this.apiService.resultProducts(inputQuery[0]).subscribe(
        response => {
          this.productListAvailable = true;
          this.resultProducts = response;
          this.resultsAvailable = true;
          this.prodCompanyList();
        },
        err => {
          console.log("Error : " + JSON.stringify(err));
        });
  
      
    }
  }




  //Search on product filter
  public onProducts(selectedProducts: string[]): void {
    this.searchInProgress = true;
    this.searchonProducts = true;
    this.productSearchResultsAvailable = false;
    this.resultProducts = selectedProducts;
    this.apiService.searchProduct(selectedProducts, selectedProducts.length,10,0).subscribe(
      response => {
        
        this.apiResponse = response;

      },
      err => {
        this.errorOccured = true;
        this.searchInProgress = false;
        this.resultsAvailable = false;
        console.log("Error : " + JSON.stringify(err));
      });

      this.apiService.productSearchCount(selectedProducts,selectedProducts.length).subscribe(
        response => {
          this.resultCount = response;
          this.productSearchResultsAvailable = true;
        this.searchInProgress = false;
        },
        err => {
          this.errorOccured = true;
          this.searchInProgress = false;
          this.resultsAvailable = false;
          
          console.log("Error : " + JSON.stringify(err));
        }
      );

      this.apiService.productCompanyList(this.resultProducts,this.resultProducts.length).subscribe(
        response => {
          
          this.productCompanyList = response;
  
        },
        err => {
          this.errorOccured = true;
          this.searchInProgress = false;
          this.resultsAvailable = false;
          console.log("Error : " + JSON.stringify(err));
        });

      

  }
  public productPaginator(input:any){
    this.productSearchResultsAvailable=false;
    this.apiService.searchProduct(this.resultProducts,this.resultProducts.length, input[1],input[2]).subscribe(
      response => {
        this.productSearchResultsAvailable = true;
        this.searchInProgress = false;
        this.apiResponse = response;

      },
      err => {
        this.errorOccured = true;
        this.searchInProgress = false;
        this.resultsAvailable = false;
        console.log("Error : " + JSON.stringify(err));
      });
      
     
      
  }

  public prodCompanyList(){
  this.apiService.productCompanyList(this.productList,this.productList.length).subscribe(
    response => {
      
      this.searchInProgress = false;
      this.productCompanyList = response;

    },
    err => {
      this.errorOccured = true;
      this.searchInProgress = false;
      this.resultsAvailable = false;
      console.log("Error : " + JSON.stringify(err));
    });
  }
}
