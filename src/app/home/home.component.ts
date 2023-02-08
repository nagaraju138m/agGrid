import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rowData!: Observable<any[]>
  columnDefs = [
		{ field: 'make', sortable:true, filter:true },
		{sortable:true, filter:true, field: 'model' },
		{sortable:true, filter:true, field: 'price'}
	];
  
	



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.rowData  = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

}
