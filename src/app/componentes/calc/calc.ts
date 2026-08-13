import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.html',
  styleUrl: './calc.css',
})
export class Calc {

  public numero1:number=0;
  public numero2:number=0;

  public texto:string = "Aula de angular hoje"

  public operacao:string = "";

  public resultado:string = "";

public calcular(): void 
{
  let calculo:number = 0;

  switch (this.operacao)
   {
    case "+":
      calculo = this.numero1 + this.numero2;
      break;

    case "-":
      calculo = this.numero1 - this.numero2;
      break;

    case "*":
      calculo = this.numero1 * this.numero2;
      break;

    case "/":
      calculo = this.numero1 / this.numero2;
      break;
  }

  this.resultado = `O resultado é ${calculo}`;
}
}
  
