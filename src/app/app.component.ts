import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title:string = 'fif-angular-mt';
  dataUser!: Array<DataUser>;

  addUserForm!: FormGroup;
  
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
    console.log(event)
    this.dataUser.push(event);
  }
}
