import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ReservePipe } from './pipe/reverse.pipe';
import { GenerateRandomIdService } from './service/generate-random-id/generate-random-id.service';
import { UserdataService } from './service/userdata/userdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, FormsModule, ReactiveFormsModule, ReservePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title:string = 'fif-angular-mt';
  dataUser!: DataUser;
  randomId: string = "";
  labelButton1: string = "ini dari parent 1";
  labelButton2: string = "ini dari parent 2";
  fontColor: string = "yellow";
  name: string = "";

  addUserForm!: FormGroup;
  isShown: boolean = false;
  today = new Date();


  constructor(
    private randomIdService: GenerateRandomIdService,
    private userDataService: UserdataService
  ){
    this.randomId = this.randomIdService.generateId();
    this.addUserForm = new FormGroup({
      name:  new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(13)])
    })
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.fontColor = "green"
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.fontColor = "red"
  }
  
  ngOnInit(): void{
    this.title = 'test fif angular';
    this.dataUser = this.userDataService.getUser()
  }

  eventFromParent(event: any){
    this.labelButton2 = event;
    this.name = event;
  }

  eventFromParent2(event: any){
    this.labelButton1 = event;
  }
  eventFromParent3(event: any){
    this.labelButton1 = event.target.value;
    this.labelButton2 = event["key"];
  }

  onSubmit(){
    console.log(this.addUserForm.value)
    this.isShown = !this.isShown;
  }

  get nameForm(){
    return this.addUserForm.get('name');
  }

  get phoneNumberForm(){
    return this.addUserForm.get('phoneNumber');
  }

}
