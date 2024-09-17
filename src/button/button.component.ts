import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataUser } from '../app/app.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonLabel!: string;
  @Input() dataForChild!: DataUser;
  @Output() submitButton = new EventEmitter<string>();

  onClick(){
    this.submitButton.emit(this.dataForChild.name);
  }
}
