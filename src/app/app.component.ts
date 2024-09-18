import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title:string = 'fif-angular-mt';
  dataUser!: Array<DataUser>;

  constructor(
    private userDataService: UserdataService
  ){}
  
  ngOnInit(): void{
    this.title = 'test fif angular';
    this.dataUser = this.userDataService.initData();
  }

  checkSubmit(event: any){
    this.userDataService.pushData(event);
  }
}
