import { Component, OnInit, Input } from '@angular/core';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.css']
})
export class FacetsComponent implements OnInit {

 
  @Input() filters:any;
  @Input() companyList:any;
  @Input() productCompanyList:any;
  

  constructor() { }

  ngOnInit() {
  }

  export(){
    const workBook = XLSX.utils.book_new(); // create a new blank book
    const exportList=[];
    this.companyList.forEach(element => {
      if(this.productCompanyList.includes(element.company))
        exportList.push(element)
    });
    
    const workSheet = XLSX.utils.json_to_sheet(exportList);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'CompanyList.xlsx');
  }
}
