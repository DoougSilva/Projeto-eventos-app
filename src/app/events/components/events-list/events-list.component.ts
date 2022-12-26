import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Ievents } from '../../model/events';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {


  @Input() events:Ievents[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'date', 'dateFinal', 'chamber', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

}
