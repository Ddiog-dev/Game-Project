import { Injectable } from '@angular/core';
import {Observable, shareReplay, Subject} from "rxjs";
import {Building} from "../economy-management/models/building";

@Injectable({
  providedIn: 'root'
})
export class SidePanelServiceService {

  componentSubject: Subject<any> = new Subject<Building>();
  componentObservable: Observable<any> = this.componentSubject.pipe(shareReplay(1));

  constructor() { }
}
