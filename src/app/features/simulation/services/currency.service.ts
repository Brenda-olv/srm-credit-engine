import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    private readonly usdToBrl = 5.30;

    convert(
        value: number,
        fromCurrency: string,
        toCurrency: string
    ): number {

        if (fromCurrency === toCurrency) {
            return value;
        }

        if (
            fromCurrency === 'USD' &&
            toCurrency === 'BRL'
        ) {
            return value * this.usdToBrl;
        }

        if (
            fromCurrency === 'BRL' &&
            toCurrency === 'USD'
        ) {
            return value / this.usdToBrl;
        }

        return value;
    }
}