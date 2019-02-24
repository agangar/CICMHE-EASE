import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PageEvent} from '@angular/material/paginator'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() searchonProducts:boolean
  @Input() apiResponse:any;
  @Input() resultsAvailable :boolean;
  @Input() resultCount:any;
  @Input() searchQuery:string;
  @Output() pageEmitter : EventEmitter<any> = new EventEmitter<any>(); 
 
  pageSize:number=10;
  pageIndex:number=1;
  constructor() { }

  ngOnInit() {
    if(this.resultsAvailable)
    console.log(this.resultCount);
  }

  public handlePaginatorEvent(event : PageEvent){
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.pageEmitter.emit([this.searchQuery,this.pageSize,this.pageIndex,1]);
  }

public search():void{
  console.log(this.apiResponse);
}  

}
