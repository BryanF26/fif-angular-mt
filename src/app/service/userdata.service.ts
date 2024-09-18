import { Injectable } from '@angular/core';
import { userDataPublic } from '../user.data';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userData = userDataPublic;

  constructor() { }

  initData(){
    return this.userData;
  }

  pushData(event:any){
    this.userData.push(event);
  }

}
