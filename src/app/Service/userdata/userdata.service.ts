import { Injectable } from '@angular/core';
import { userDataPublic } from '../../user.data';
import { DataUser } from '../../app.entity';

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
