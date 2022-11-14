import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParamsService {
  private subject = new Subject<string>();
  dataEmit = new EventEmitter<string>();

  constructor() {}

  raiseDataEmit(data: string) {
    this.dataEmit.emit(data);
  }

  // sendParams(params: any) {
  //   this.subject.next(params);
  // }

  // receiveParams(): Observable<string> {
  //   return this.subject.asObservable();
  // }
}
