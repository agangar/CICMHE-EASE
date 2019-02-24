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


  public search() : void{
    this.queryEmittor.emit([this.query,10,0,0]);
  }

  public handleEnter(keyCode: number) : void{
    if(keyCode == 13){
      this.search();
    }
  }
}
