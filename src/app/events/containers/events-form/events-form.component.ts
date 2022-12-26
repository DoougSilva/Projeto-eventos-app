import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    date: [new Date],
    dateFinal: [new Date],
    chamber: [0]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: EventsService,
    private _snackBar: MatSnackBar,
    private location: Location) {
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(data => this.onSuccess()
    , error => this.onError())
    };

  onCancel() {
    this.location.back();
  }

  private onError() {
    this._snackBar.open("Erro ao salvar evento",'', { duration: 3000});
  }

  private onSuccess() {
    this._snackBar.open("Evento salvo com sucesso",'', { duration: 3000});
    this.location.back();
  }
}
