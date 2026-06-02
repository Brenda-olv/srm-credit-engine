import { Injectable } from '@angular/core';
import { Currency } from '../../../shared/enums/currency.model';

@Injectable({
    providedIn: 'root'
})


export class CurrencyService {
    private readonly rates: Record<string, number> = {
        'USD_BRL': 5.30,
        'BRL_USD': 1 / 5.30
    };

    convert(
        value: number,
        from: Currency,
        to: Currency
    ): number {

        if (from === to) {
            return value;
        }

        const key = `${from}_${to}`;
        const rate = this.rates[key];

        if (!rate) {
            throw new Error(`Conversão não suportada: ${from} -> ${to}`);
        }

        return value * rate;
    }
}