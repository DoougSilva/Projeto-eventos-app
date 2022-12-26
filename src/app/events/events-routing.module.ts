import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsResolver } from './guards/events.resolver';
import { EventsFormComponent } from './containers/events-form/events-form.component';
import { EventsComponent } from './containers/events/events.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'new', component: EventsFormComponent },
  { path: 'edit/:id', component: EventsFormComponent, resolve: { event: EventsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
