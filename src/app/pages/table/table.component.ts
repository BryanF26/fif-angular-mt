import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataUser } from '../../app.entity';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from '../../../service/snack-bar/snack-bar.service';
import { HttpRequestService } from '../../../service/http-request/http-request.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  @Output() idDelete = new EventEmitter<string>();
  dataTable!: DataUser[];
  isLoading! : boolean;
  url!: string;
  isError!: boolean;
  currentDate:  Date = new Date();

  constructor(
    private snackBService:SnackBarService,
    private httpRequestService: HttpRequestService,
    private router: Router,
    private route: ActivatedRoute

  ){
    this.route.queryParams.subscribe(params => {
      this.isError = params['error'];
    });
  }

  ngOnInit(): void {
    this.fetchDataUser();
  }

  fetchDataUser(){
    this.isLoading =  true;
    this.httpRequestService.getData().subscribe((res:any) => {
        this.isLoading = false;
        console.log(res);this.dataTable = res;
      }, (err: any) => {
        this.isLoading = false;
        console.log(err)
        this.goToHomeError()
      }
    );
  }

  deleteData(event: any){
    this.httpRequestService.deleteData(event).subscribe((res:any)=>{
        this.trigger('Delete Successed', 'Okay')
        this.fetchDataUser()
      }, (err: any) => {
        console.log(err)
        this.goToHomeError()
      }
    );
  }

  addData(){
    this.router.navigate(['/detail/0/add']);
  }

  goToDetail(event:any){
    this.url = `/detail/${event}/put`
    this.router.navigate([this.url]);
  }

  isDeadline(event:any){
    let date = new Date(event);
    return Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()) ) /(1000 * 60 * 60 * 24)) <= 3;
  }

  checkCompleted(idx:any, event:any){
    this.httpRequestService.editData(idx, event).subscribe(
      (res:any)=>{
        console.log("Success update user", res);
      }, (err:any) => {
        console.log(err)
        this.goToHomeError()
      }
    );
  }

  trigger(message:string, action:string) 
  { 
    this.snackBService.openSnackBar(message, action); 
  } 

  goToHomeError(){
    this.router.navigate([''], {queryParams:{error:true}});
  }
}