import { Injectable } from '@angular/core';
import { userDataPublic } from '../user.data';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userData = userDataPublic;
  currentDate:  Date = new Date();

  constructor() { }

  initData(){
    return this.userData;
  }

  pushData(event:any){
    this.userData.push(event);
  }

  deleteData(event:any){
    this.userData.splice(event, 1);
  }

  checkCompleted(idx:number, event:any){
    this.userData[idx].isCompleted = event;
  }

  checkDeadline(event:any){
    return Math.floor((Date.UTC(event.getFullYear(), event.getMonth(), event.getDate()) - Date.UTC(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()) ) /(1000 * 60 * 60 * 24)) <= 3;
  }

}
