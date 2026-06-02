import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Transactions } from '../models/transactions.model';
import { PaginatedResponse } from '../models/paginated-response.model';

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {

    private readonly mockData: Transactions[] =
        Array.from({ length: 50 }, (_, index) => ({

            id: index + 1,

            tipo: index % 2 === 0 ? 'Duplicata' : 'Cheque',

            moeda: index % 3 === 0 ? 'USD' : 'BRL',

            valor: 10000 + (index * 5000),

            data: `2026-06-${String((index % 30) + 1).padStart(2, '0')}`

        }));

    getTransactions(
        page: number,
        pageSize: number,
        tipo?: string,
        moeda?: string
    ): Observable<PaginatedResponse<Transactions>> {

        const filtered = this.mockData.filter(item => {

            const tipoMatch = !tipo || item.tipo === tipo;
            const moedaMatch = !moeda || item.moeda === moeda;

            return tipoMatch && moedaMatch;
        });

        const start = page * pageSize;
        const end = start + pageSize;

        return of({
            data: filtered.slice(start, end),
            total: filtered.length
        }).pipe(delay(500));
    }

    getAllTransactions(): Transactions[] {
        return this.mockData;
    }
}