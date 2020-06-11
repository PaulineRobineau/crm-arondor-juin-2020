import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Btn } from 'src/app/core/interfaces/btn';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})

export class PageListOrdersComponent implements OnInit {

  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public headers: string[];
  //public collection: Order[];
  public collection$: Observable<Order[]> // $ = convention de nommage pour les Observable
  public states = Object.values(StateOrder); //Object.values pour convertir en Array

  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    /*this.os.collection.subscribe(
      (datas) => {
        this.collection = datas;
      }
    );*/
    this.collection$ = this.os.collection;
    this.headers = [
      'Type',
      'Client',
      'Nombre de jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ]
    this.btnRoute = {route: 'add', label: 'Add order'};
    this.btnHref = {href: 'http://www.google.fr', label: 'Go to Google'};
    this.btnAction = {action: true, label: 'Action'};
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public popup() {
    console.log("Open popup called");
  }

}
