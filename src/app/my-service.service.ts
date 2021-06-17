import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  private pageName = new Subject<any>();

  pageNameChange$ = this.pageName.asObservable();
  changedComponentName(option:any){
        this.pageName.next(option);
  }
}
