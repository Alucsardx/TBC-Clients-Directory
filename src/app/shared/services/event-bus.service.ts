import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { EventBusEvent } from 'src/app/models/event-bus-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventBus$: Subject<EventBusEvent>;

  constructor() {
    this.eventBus$ = new Subject<EventBusEvent>();
  }

  emit(key: any, data?: any) {
    this.eventBus$.next({ key, data });
  }

  on<T>(key: any): Observable<T> {
    return this.eventBus$.asObservable().pipe(
      filter(event => event.key === key),
      map(event => event.data as T)
    );
  }
}
