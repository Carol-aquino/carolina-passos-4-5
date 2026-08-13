import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario: string = "";
  senha: string = "";

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  entrar(): void {

    this.authService.login(this.usuario, this.senha).subscribe({

      next: (res) => {
        console.log('Login realizado com sucesso!', res);

        localStorage.setItem('usuario', JSON.stringify(res));

        this.router.navigate(['/home']);
      },

      error: (err) => {
        alert(err.error.message);
      }

    });

  }

}