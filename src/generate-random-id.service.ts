import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateRandomIdService {

  constructor() { }

  generateId(length: number = 10): string {
    const characters ='abcdefghijklmnopqrstuvwxyz';
    let result  = '';
    const  charactersLength = characters.length;
    for  ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
