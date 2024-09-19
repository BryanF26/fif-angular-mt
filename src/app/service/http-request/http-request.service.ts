import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../../app.entity';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  apiUrl: string = "https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee"

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(){
    return this.httpClient.get(this.apiUrl)
  }

  getDataById(id:any){
    return this.httpClient.get(this.apiUrl + '/' + id)
  }

  createData(payload:DataUser){
    return this.httpClient.post(this.apiUrl, payload)
  }

  deleteData(id:string){
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  }

  editData(id:any,  payload:DataUser){

    return this.httpClient.put(`${this.apiUrl}/${id}`, payload)
  }
}
