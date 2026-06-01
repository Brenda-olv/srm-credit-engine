import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { SimulationResult } from '../../models/simulation-result.model';
import { SimulationService } from '../../services/simulation.service';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DecimalPipe
  ],
  templateUrl: './simulation.html',
  styleUrl: './simulation.scss'
})
export class SimulationComponent {

  resultado?: SimulationResult;

  simulationForm = new FormGroup({
    valorRecebivel: new FormControl<number | null>(
      100000,
      [
        Validators.required,
        Validators.min(1)
      ]
    ),

    prazo: new FormControl<number | null>(
      12,
      [
        Validators.required,
        Validators.min(1)
      ]
    ),

    tipoRecebivel: new FormControl<string>('duplicata'),

    moedaTitulo: new FormControl<string>('BRL'),

    moedaLiquidacao: new FormControl<string>('BRL')
  });

  constructor(
    private simulationService: SimulationService
  ) {

    this.calculateSimulation();

    this.simulationForm.valueChanges.subscribe(() => {
      this.calculateSimulation();
    });

  }

  private calculateSimulation(): void {

    const formValue = this.simulationForm.getRawValue();

    this.resultado = this.simulationService.calculate(
      formValue.valorRecebivel ?? 0,
      formValue.prazo ?? 0,
      formValue.tipoRecebivel ?? 'duplicata'
    );

  }

}