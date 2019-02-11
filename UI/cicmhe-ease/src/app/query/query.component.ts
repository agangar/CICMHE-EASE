import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  
  @Input() filters:any;
  @Output() queryEmittor : EventEmitter<any> = new EventEmitter<any>(); 
 
  query:string = '';
  
  
  ngOnInit() {
    console.log(this.filters);
  }


  public search() : void{
    console.log(this.query);
    this.queryEmittor.emit(this.query);
  }

  public handleEnter(keyCode: number) : void{
    if(keyCode == 13){
      this.search();
    }
  }
}
