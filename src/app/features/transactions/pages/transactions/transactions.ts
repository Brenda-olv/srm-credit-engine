import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { TransactionsService } from '../../services/transactions.service';
import { Transactions } from '../../models/transactions.model';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DecimalPipe
  ],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss'
})
export class TransactionsComponent {

  transactions: Transactions[] = [];

  filteredTransactions: Transactions[] = [];

  filterForm = new FormGroup({
    tipo: new FormControl(''),
    moeda: new FormControl('')
  });

  constructor(
    private transactionsService: TransactionsService
  ) {

    this.transactions =
      this.transactionsService.getTransactions();

    this.filteredTransactions =
      this.transactions;

    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });

  }

  private applyFilters(): void {

    const filters =
      this.filterForm.getRawValue();

    this.filteredTransactions =
      this.transactions.filter(transaction => {

        const tipoMatch =
          !filters.tipo ||
          transaction.tipo === filters.tipo;

        const moedaMatch =
          !filters.moeda ||
          transaction.moeda === filters.moeda;

        return tipoMatch && moedaMatch;

      });

  }

}