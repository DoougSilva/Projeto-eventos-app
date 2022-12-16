import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { EventsService } from '../services/events.service';
import { Ievents } from './../model/events';

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
    private route: ActivatedRoute
  ) {
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

}
