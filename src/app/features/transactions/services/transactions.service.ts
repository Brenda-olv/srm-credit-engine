import { Injectable } from '@angular/core';
import { Transactions } from '../models/transactions.model';

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {

    getTransactions(): Transactions[] {

        return [
            {
                id: 1,
                tipo: 'Duplicata',
                moeda: 'BRL',
                valor: 100000,
                data: '2026-06-01'
            },
            {
                id: 2,
                tipo: 'Cheque',
                moeda: 'USD',
                valor: 50000,
                data: '2026-06-01'
            },
            {
                id: 3,
                tipo: 'Duplicata',
                moeda: 'USD',
                valor: 75000,
                data: '2026-06-02'
            }
        ];

    }

}