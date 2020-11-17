import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/providers/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailCtrl = new FormControl();
  passwordCtrl = new FormControl();

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogin = () => {
    this.authService
        .login(this.emailCtrl.value, this.passwordCtrl.value)
        .subscribe((user) =>  {
          this.router.navigate(['/admin']);
        }, (error) => 
        {
          alert("Não foi possivel fazer o login, tente novamente!")
        });
  }
}


