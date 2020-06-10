import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})

export class PageListOrdersComponent implements OnInit {
  public headers: string[];
  public collection: Order[];
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
        this.collection = datas;
      }
    );
    this.headers = [
      'Type',
      'Client',
      'Nombre de jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ]
  }
}
