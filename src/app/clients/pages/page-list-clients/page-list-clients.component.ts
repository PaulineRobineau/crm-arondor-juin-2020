import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Btn } from 'src/app/core/interfaces/btn';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public btnRoute: Btn;
  public headers: string[];
  public collection$: Observable<Client[]>;
  public states = Object.values(StateClient);

  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.collection$ = this.os.collection;
    this.headers = [
      'Nom',
      'CA',
      'CA TTC',
      'State',
      'Commentaire',
    ]

    this.btnRoute = {route: 'add', label: 'Add client'};
  }

  public changeState(item: Client, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

}
