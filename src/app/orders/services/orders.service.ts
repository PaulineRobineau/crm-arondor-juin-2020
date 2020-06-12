import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`);
  }
  // get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }
  // change state of item
  public changeState(item:Order, state:StateOrder):Observable<Order>{
    const copyItem = {...item}; //Utilisation d'un spreadOperator
    copyItem.state = state;
    return this.updateItem(copyItem);
  }
  // update item in collection
  public updateItem(item:Order): Observable<Order>{
    return this.http.patch<Order>(`${this.urlApi}orders/${item.id}`,item);
  }

  public addItem(item:Order): Observable<Order>{
    return this.http.post<Order>(`${this.urlApi}orders`,item);
  }
  // add item in collection
  // delete item in collection
  // get item by id
}
