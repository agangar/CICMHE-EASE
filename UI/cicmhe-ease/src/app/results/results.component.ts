import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() apiResponse:any;
  @Input() resultsAvailable :boolean;
  constructor() { }

  ngOnInit() {
  }

public search():void{
  console.log(this.apiResponse);
}  

}
