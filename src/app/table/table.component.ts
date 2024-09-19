import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataUser } from '../app.entity';
import { UserdataService } from '../service/userdata/userdata.service';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../service/snack-bar/snack-bar.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() dataTable!: Array<DataUser>;
  @Output() idDelete = new EventEmitter<string>();

  constructor(
    // private userDataService: UserdataService,
    private snackBService:SnackBarService
  ){}

  deleteData(event:any){
  //   this.userDataService.deleteData(event);
    this.idDelete.emit(event);
    this.trigger('Delete Successed', 'Okay')
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