import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public initFormItem = new Client();
  constructor(private os: ClientsService, private router:Router) { }
  ngOnInit(): void {
  }
  public onSubmited(item: Client): void {
    this.os.addItem(item).subscribe((res) => {
      console.log(res);
      this.router.navigate(['clients']);
    });
  }

}
