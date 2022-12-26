import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { EventsService } from '../services/events.service';
import { Ievents } from './../model/events';

@Injectable({
  providedIn: 'root'
})
export class EventsResolver implements Resolve<Ievents> {

  constructor(private service: EventsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ievents> {
    if (route.params && route.params['id']) {
      return this.service.findById(route.params['id']);
    }
    return of({
      id: 0,
      name: '',
      date: new Date,
      dateFinal: new Date,
      chamber: 0
    });
  }
}
