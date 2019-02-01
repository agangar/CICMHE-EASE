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
  filters:any='';
  productList:any='';
  filterAvailable:boolean=false;
  productListAvailable:boolean=false;

  ngOnInit(){
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

      

  }
  public onInputs(inputQuery : string):void{
    this.apiService.search(inputQuery).subscribe(
      response => { 
        

        this.searchInProgress = false;
        this.resultsAvailable = true;
        this.apiResponse = response;
        console.log(response);
        
    },
    err => {
      this.errorOccured = true;
      this.searchInProgress = false;
      console.log("Error : " + JSON.stringify(err));
    });
  }
  
}
