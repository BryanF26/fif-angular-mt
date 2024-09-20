import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  // @Input() buttonLabel!: string;
  // @Input() dataForChild!: DataUser;
  // @Output() submitButton = new EventEmitter<string>();

  constructor(
    private authentication:AuthenticationService
  ){}

  onClick(){
    // this.submitButton.emit(this.dataForChild.name);
    this.authentication.isLoggedOut() 
  }
}
