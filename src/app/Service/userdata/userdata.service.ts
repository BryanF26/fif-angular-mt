import { Injectable } from '@angular/core';
import { userDataPublic } from '../../user.data';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userData = userDataPublic;

  constructor() { }

  getUser(){
    return this.userData;
  }
}
