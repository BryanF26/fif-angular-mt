import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataUser } from '../app.entity';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() dataTable!: Array<DataUser>;
}
