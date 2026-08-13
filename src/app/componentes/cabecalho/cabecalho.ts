import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

}