import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  
  @Input() filters:any;
  @Input() searchonProducts:boolean;
  @Output() queryEmittor : EventEmitter<any> = new EventEmitter<any>(); 
 
  query:string = '';
  
  
  ngOnInit() {
    console.log(this.filters);
  }


  public onSelect(event) : void{
    console.log(event);
    this.queryEmittor.emit([event,10,0,0]);
  }

}
