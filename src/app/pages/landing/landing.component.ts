import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';
import { ReservePipe } from '../../pipe/reverse.pipe';
import { DataUser } from '../../app.entity';
import { GenerateRandomIdService } from '../../service/generate-random-id/generate-random-id.service';
import { UserdataService } from '../../service/userdata/userdata.service';
import { HttpRequestService } from '../../service/http-service/http-request.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, FormsModule, ReactiveFormsModule, ReservePipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  title:string = 'fif-angular-mt';
  dataUser!: DataUser[];
  randomId: string = "";
  labelButton1: string = "ini dari parent 1";
  labelButton2: string = "ini dari parent 2";
  fontColor: string = "yellow";
  name: string = "";

  addUserForm!: FormGroup;
  isShown: boolean = false;
  today = new Date();
  apiUrl: string = "https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee"
  isLoading!: boolean;

  constructor(
    private randomIdService: GenerateRandomIdService,
    private userDataService: UserdataService,
    private httpRequestService: HttpRequestService
  ){
    this.randomId = this.randomIdService.generateId();
    this.addUserForm = new FormGroup({
      name:  new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(13)])
    })
  }
  
  ngOnInit(): void{
    this.title = 'test fif angular';
    // this.dataUser = this.userDataService.getUser()
    this.fetchDataUser();
  }

  fetchDataUser(){
    this.isLoading =  true;
    this.httpRequestService.getData().subscribe((res:any) => {this.isLoading = false;this.dataUser = res;}, (err) => {this.isLoading = false;console.log(err)});
  }

  createUser(){
    const payload={
      "paymentDeadline": new Date(),
      "username": "Janessa25",
      "name": "Raoul",
      "email": "Laisha.Kutch36@yahoo.com",
      "basicSalary": "949883087",
      "city": "Hammesworth",
      "province": "Mongolia",
      "zipcode": "TC",
      "isChecked": false,
      "age": 93
    }
    this.httpRequestService.createUser(payload).subscribe((res:any)=>{console.log("Success create user", res)})
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.fontColor = "green"
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.fontColor = "red"
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
