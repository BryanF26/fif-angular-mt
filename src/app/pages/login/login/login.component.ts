import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username!: string; //emilys
  password!: string; //emilyspass
  error: string  = '';

  constructor(
    private authService: AuthenticationService,
    private router:Router
  ){}

  onLogin(): void{
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.error = 'Login Failed. Please try again.';
        console.log(err);
      }
    })
  }

  onSubmit(){
    this.onLogin();
  }

  errorMessage(){
    return !!this.error;
  }


}
