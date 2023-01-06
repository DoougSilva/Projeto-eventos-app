import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Ievents } from '../../model/events';
import { EventsService } from './../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events:Ievents[] = [];
  displayedColumns = ['name', 'date', 'dateFinal', 'chamber', 'actions'];

  constructor(
    private service:EventsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,) {
      this.refresh();
    }

  refresh() {
    this.service.findAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar eventos.')
        return of([])
      })
    )
    .subscribe((data:any) => this.events = data.content);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(event: Ievents) {
    this.router.navigate(['edit', event.id], {relativeTo: this.route});
  }

  onDelete(event: Ievents) {
    this.service.delete(event.id).subscribe(
      () => {
        this.refresh();
        this._snackBar.open("Evento removido com sucesso",'X', { 
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      error => this.onError("Erro ao tentar remover evento")
    );
  }
}
