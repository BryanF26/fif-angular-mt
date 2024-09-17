import { Component, EventEmitter, Output } from '@angular/core';
import { DataUser } from '../app/app.entity';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent{
  addUserForm!: FormGroup;
  dataUser!: DataUser;
  @Output() submitButton = new EventEmitter<DataUser>();

  constructor(){
    this.addUserForm = new FormGroup({
      name:  new FormControl('', [Validators.required,  Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      zipCode: new FormControl(0, Validators.required),
    })
  }

  onSubmit(event: any){
    this.dataUser = {
      name: this.addUserForm.get('name')?.value,
      email: this.addUserForm.get('email')?.value,
      address: {
        province: this.addUserForm.get('province')?.value,
        city: this.addUserForm.get('city')?.value,
        zipCode: this.addUserForm.get('zipCode')?.value
      }
    };
    this.submitButton.emit(this.dataUser);
    console.log(this.addUserForm.value)
  }

  get nameForm(){
    return this.addUserForm.get('name');
  }

  get emailForm(){
    return this.addUserForm.get('email');
  }

  get cityForm(){
    return this.addUserForm.get('city');
  }

  get provinceForm(){
    return this.addUserForm.get('province');
  }

  get zipCodeForm(){
    return this.addUserForm.get('zipCode');
  }
  
}
