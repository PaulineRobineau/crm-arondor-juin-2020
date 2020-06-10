import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
