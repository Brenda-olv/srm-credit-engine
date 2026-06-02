import { Injectable } from '@angular/core';

import { DuplicataStrategy } from '../strategies/duplicata.strategy';
import { ChequeStrategy } from '../strategies/cheque.strategy';
import { SimulationResult } from '../models/simulation-result.model';
import { CurrencyService } from './currency.service';
import { Currency } from '../../../shared/enums/currency.enum';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private readonly taxaBase = 0.01;

  constructor(
    private currencyService: CurrencyService
  ) { }

  calculate(
    valorRecebivel: number,
    prazo: number,
    tipoRecebivel: string,
    moedaTitulo: Currency,
    moedaLiquidacao: Currency
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

    const valorLiquidacao =
      this.currencyService.convert(
        valorPresente,
        moedaTitulo,
        moedaLiquidacao
      );

    return {
      spread,
      taxaBase: this.taxaBase,
      valorPresente,
      valorLiquidacao
    };
  }
}