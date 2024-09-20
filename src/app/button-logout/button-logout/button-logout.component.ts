import { Component } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication/authentication.service';

@Component({
  selector: 'app-button-logout',
  standalone: true,
  imports: [],
  templateUrl: './button-logout.component.html',
  styleUrl: './button-logout.component.scss'
})
export class ButtonLogoutComponent {

  constructor(
    private authentication:AuthenticationService
  ){}

  onClick(){
    this.authentication.isLoggedOut() 
  }

}