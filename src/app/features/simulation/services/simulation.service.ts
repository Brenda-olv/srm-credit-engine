import { Injectable } from '@angular/core';

import { DuplicataStrategy } from '../strategies/duplicata.strategy';

import { SimulationResult } from '../models/simulation-result.model';
import { ChequeStrategy } from '../strategies/cheque.strategy';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private readonly taxaBase = 0.01;

  calculate(
    valorRecebivel: number,
    prazo: number,
    tipoRecebivel: string
  ): SimulationResult {

    const strategy =
      tipoRecebivel === 'duplicata'
        ? new DuplicataStrategy()
        : new ChequeStrategy();

    const spread = strategy.getSpread();

    const valorPresente =
      valorRecebivel /
      Math.pow(
        1 + this.taxaBase + spread,
        prazo
      );

    return {
      spread,
      taxaBase: this.taxaBase,
      valorPresente
    };
  }
}