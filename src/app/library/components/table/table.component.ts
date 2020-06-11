import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
