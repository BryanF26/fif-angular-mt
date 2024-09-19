import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataUser } from '../../app.entity';
import { UserdataService } from '../../service/userdata/userdata.service';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../../service/snack-bar/snack-bar.service';
import { HttpRequestService } from '../../service/http-request/http-request.service';
import { Router } from '@angular/router';

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

  constructor(
    // private userDataService: UserdataService,
    private snackBService:SnackBarService,
    private httpRequestService: HttpRequestService,
    private router: Router

  ){}

  ngOnInit(): void {
    this.fetchDataUser();
  }

  fetchDataUser(){
    this.isLoading =  true;
    this.httpRequestService.getData().subscribe((res:any) => {this.isLoading = false;console.log(res);this.dataTable = res;}, (err) => {this.isLoading = false;console.log(err)});
  }

  // deleteData(event:any){
  // //   this.userDataService.deleteData(event);
  //   this.idDelete.emit(event);
  //   this.trigger('Delete Successed', 'Okay')
  // }
  deleteData(event: any){
    this.httpRequestService.deleteData(event).subscribe(
      (res:any)=>{
        this.trigger('Delete Successed', 'Okay')
        this.fetchDataUser()
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
  //   return this.userDataService.checkDeadline(event)
  }

  checkCompleted(idx:number, event:any){
  //   this.userDataService.checkCompleted(idx, event)
  }

  trigger(message:string, action:string) 
  { 
    this.snackBService.openSnackBar(message, action); 
  } 
}