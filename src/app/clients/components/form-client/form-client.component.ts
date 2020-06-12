import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  public states = Object.values(StateClient);
  public form: FormGroup;
  @Input() initFormItem: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      state: [this.initFormItem.state],
      tva: [this.initFormItem.tva],
      id: [this.initFormItem.id],
      name: [this.initFormItem.name, Validators.required],
      ca: [this.initFormItem.ca, Validators.required],
      comment: [this.initFormItem.comment],
    });
  }
  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }

}
