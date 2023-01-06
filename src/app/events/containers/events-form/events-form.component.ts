import { Ievents } from './../../model/events';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
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
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    date: [new Date, [Validators.required]],
    dateFinal: [new Date, [Validators.required]],
    chamber: [0,[Validators.required]]
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

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if(field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if(field?.hasError('minlength')) {
      const requeiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 3;
      return `Tamanho mínimo de ${requeiredLength} caracteres.`;
    }

    if(field?.hasError('maxlength')) {
      const requeiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 255;
      return `Tamanho máximo de ${requeiredLength} caracteres.`;
    }

    return 'Erro';
  }
}
