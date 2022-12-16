import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { EventsFormComponent } from './events-form/events-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventsFormComponent,
    EventsListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
