import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  
  @Input() filters:any;
  @Output() queryEmittor : EventEmitter<any> = new EventEmitter<any>(); 
 
  queryText:string = '';
  
  
  ngOnInit() {
    console.log(this.filters);
  }


  public search() : void{
    this.queryEmittor.emit(this.queryText);
  }

  public handleEnter(keyCode: number) : void{
    if(keyCode == 13){
      this.search();
    }
  }
}
