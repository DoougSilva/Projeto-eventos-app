import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Ievents } from './../model/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly API = 'http://localhost:9090/evento'

  constructor(private htttClient: HttpClient) { }

  findAll() {
    return this.htttClient.get<Ievents[]>(this.API)
    .pipe(
      first()
    );
  }

  findById(id: number) {
    return this.htttClient.get<Ievents>(`${this.API}/id/${id}`);
  }

  save(record: Partial<Ievents>) {
    if (record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  delete(id: number) {
    return this.htttClient.delete<Ievents>(`${this.API}/del-id/${id}`);
  }

  private create(record: Partial<Ievents>) {
    return this.htttClient.post<Ievents>(this.API, record);
  }

  private update(record: Partial<Ievents>) {
    return this.htttClient.put<Ievents>(`${this.API}/put`, record);
  }
}
