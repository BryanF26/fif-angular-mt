import { Component, OnInit } from '@angular/core';
import { DataUser } from '../../app.entity';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpRequestService } from '../../../service/http-request/http-request.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  addUserForm!: FormGroup;
  dataUser!: DataUser;
  idUrl: string | null = null;
  methodeUrl: string | null = null;
  isLoading: boolean = true;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private httpRequestService: HttpRequestService
  ){
    this.addUserForm = new FormGroup({
      name:  new FormControl('', [Validators.required,  Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      zipCode: new FormControl(0, Validators.required),
      paymentDeadline: new FormControl(new Date(), Validators.required),
      age: new FormControl(0, Validators.required),
      basicSalary: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    });
    this.idUrl = this.activatedRoute.snapshot.paramMap.get('id')
    this.methodeUrl = this.activatedRoute.snapshot.paramMap.get('methode')
    if(this.methodeUrl !== "put" &&  this.methodeUrl !== "add"){
      this.router.navigate(['/error'])
    } if(this.methodeUrl === "add" &&  this.idUrl !== "0"){
      this.router.navigate(['/error'])
    }
  }

  ngOnInit(): void {
    this.fetchDataUser()
  }

  createUser(event: any){
    this.httpRequestService.createData(event).subscribe(
      (res:any)=>{
        console.log("Success create user", res);
      }, (err) => {
        console.log(err)
        this.goToHomeError()
      }
    );
  }

  fetchAllDataUser(){
    this.isLoading =  true;
    this.httpRequestService.getData().subscribe((res:any) => {
        this.isLoading = false;
        console.log(res);
      }, (err:any) => {
        this.isLoading = false;
        console.log(err)
        this.goToHomeError()
      }
    );
  }

  fetchDataUser(){
    if(this.methodeUrl === "put"){
      this.isLoading =  true;
      this.httpRequestService.getDataById(this.idUrl).subscribe((res:any)=>{
        this.isLoading = false;
        console.log(res);
        this.nameForm?.setValue(res.name)
        this.emailForm?.setValue(res.email)
        this.cityForm?.setValue(res.city)
        this.provinceForm?.setValue(res.province)
        this.zipCodeForm?.setValue(res.zipcode)
        const date = new Date(res.paymentDeadline);
        this.paymentDeadlineForm?.setValue(`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`);
        this.ageForm?.setValue(res.age)
        this.basicSalaryForm?.setValue(res.basicSalary)
        this.usernameForm?.setValue(res.username)
        this.dataUser = res
      }, (err:any) => {
        this.isLoading = false;
        console.log(err)
        this.goToHomeError()
      });
    } else if(this.methodeUrl === "add"){
      this.isLoading = false;
    }
  }

  onSubmit(){
    const temp:any = this.idUrl;
    this.dataUser = {
      id: (this.dataUser === undefined) ?  null : temp,
      name: this.addUserForm.get('name')?.value,
      email: this.addUserForm.get('email')?.value,
      province: this.addUserForm.get('province')?.value,
      city: this.addUserForm.get('city')?.value,
      zipcode: this.addUserForm.get('zipCode')?.value,
      paymentDeadline: new Date(this.addUserForm.get('paymentDeadline')?.value),
      isChecked: (this.dataUser === undefined) ?  false : this.dataUser.isChecked,
      age: this.addUserForm.get('age')?.value,
      basicSalary:  this.addUserForm.get('basicSalary')?.value,
      username:  this.addUserForm.get('username')?.value
    };
    console.log(this.dataUser)
    if(this.methodeUrl === "put"){
      this.httpRequestService.editData(this.idUrl, this.dataUser).subscribe(
        (res:any)=>{
          console.log("Success update user", res);
        }, (err:any) => {
          console.log(err)
          this.goToHomeError()
        }
      );
    } else if(this.methodeUrl === "add"){
      this.createUser(this.dataUser)
    }
    this.goToHome()
  }

  goToHome(){
    this.fetchAllDataUser()
    this.router.navigate(['']);
  }
  
  goToHomeError(){
    this.router.navigate([''], {queryParams:{error:true}});
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
  
  get paymentDeadlineForm(){
    return this.addUserForm.get('paymentDeadline');
  }
  
  get ageForm(){
    return this.addUserForm.get('age');
  }
  
  get basicSalaryForm(){
    return this.addUserForm.get('basicSalary');
  }
  
  get usernameForm(){
    return this.addUserForm.get('username');
  }
  
}
