import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`);
  }
  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
  // change state of item
  public changeState(item:Client, state:StateClient):Observable<Client>{
    const copyItem = {...item}; //Utilisation d'un spreadOperator
    copyItem.state = state;
    return this.updateItem(copyItem);
  }
  // update item in collection
  public updateItem(item:Client): Observable<Client>{
    return this.http.patch<Client>(`${this.urlApi}clients/${item.id}`,item);
  }
  // add item in collection
  // delete item in collection
  // get item by id
}
