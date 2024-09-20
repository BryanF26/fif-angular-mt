import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonLogoutComponent } from "./button-logout/button-logout/button-logout.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonLogoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title:string = 'fif-angular-mt';
  constructor(
  ){}

  checkLoggedIn(): boolean{
    return !!localStorage.getItem("authToken");
  }
}
