import { Ievents } from './../../model/events';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [0],
    name: [''],
    date: [new Date],
    dateFinal: [new Date],
    chamber: [0]
  });



  constructor(private formBuilder: NonNullableFormBuilder,
    private service: EventsService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    const event: Ievents = this.route.snapshot.data['event'];
    this.form.setValue({
      id: event.id,
      name: event.name,
      date: event.date,
      dateFinal: event.dateFinal,
      chamber: event.chamber
    })
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
