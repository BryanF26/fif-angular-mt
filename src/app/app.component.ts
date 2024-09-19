import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
// import { FormComponent } from "./pages/form/form.component";
// import { TableComponent } from "./pages/table/table.component";
import { HttpRequestService } from './service/http-request/http-request.service';
// import { UserdataService } from './service/userdata/userdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title:string = 'fif-angular-mt';
  dataUser!: DataUser[];
  isLoading! : boolean;


  constructor(
    // private userDataService: UserdataService
    private httpRequestService: HttpRequestService
  ){}
  
  ngOnInit(): void{
    this.title = 'test fif angular';
    // this.dataUser = this.userDataService.initData();
    this.fetchDataUser();
  }

  createUser(event: any){
    this.httpRequestService.createData(event).subscribe(
      (res:any)=>{
        console.log("Success create user", res);
        this.fetchDataUser()
      }
    );
  }

  deleteUser(event: any){
    this.httpRequestService.deleteData(event).subscribe(
      (res:any)=>{
        console.log("Success delete user", res);
        this.fetchDataUser()
      }
    );
  }

  fetchDataUser(){
    this.isLoading =  true;
    this.httpRequestService.getData().subscribe((res:any) => {this.isLoading = false;console.log(res);this.dataUser = res;}, (err) => {this.isLoading = false;console.log(err)});
  }
}
