import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './simulation.html',
  styleUrl: './simulation.scss',
})
export class SimulationComponent {


  simulationForm = new FormGroup({
    valorRecebivel: new FormControl<number>(100000),
    prazo: new FormControl<number>(12),
    tipoRecebivel: new FormControl<string>('duplicata'),
    moedaTitulo: new FormControl<string>('BRL'),
    moedaLiquidacao: new FormControl<string>('BRL')
  });

  constructor() {
    this.simulationForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}
