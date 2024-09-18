import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";

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
    
  ){}
  
  ngOnInit(): void{
    this.title = 'test fif angular';
    this.dataUser = [
      {
      name:  'John',
      email: 'john@gmail.com',
      address:
        {
          province: 'Banten',
          city: 'Tangerang',
          zipCode: 1
        }
      },
      {
        name:  'John',
        email: 'john@gmail.com',
        address:
          {
            province: 'Banten',
            city: 'Tangerang',
            zipCode: 1
          }
      },
    ]
  }

  checkSubmit(event: any){
    this.dataUser.push(event);
  }
}
