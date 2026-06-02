import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TransactionsService } from '../../services/transactions.service';
import { Transactions } from '../../models/transactions.model';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    DecimalPipe,
    MatPaginatorModule
  ],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss'
})
export class TransactionsComponent implements OnInit {

  loading = false;

  transactions: Transactions[] = [];

  totalItems = 0;

  pageSize = 10;

  currentPage = 0;

  filterForm = new FormGroup({
    tipo: new FormControl(''),
    moeda: new FormControl('')
  });

  constructor(
    private transactionsService: TransactionsService,
    private cdr: ChangeDetectorRef,
    private notification: NotificationService,

  ) { }

  ngOnInit(): void {
    this.loadTransactions();

    this.filterForm.valueChanges.subscribe(() => {
      this.currentPage = 0;
      this.loadTransactions();
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  loadTransactions(): void {

    this.loading = true;

    const { tipo, moeda } = this.filterForm.getRawValue();

    this.transactionsService.getTransactions(
      this.currentPage,
      this.pageSize,
      tipo ?? undefined,
      moeda ?? undefined
    ).subscribe({
      next: (response) => {

        this.transactions = response.data;
        this.totalItems = response.total;

        this.loading = false;
        this.notification.success('Transações carregadas com sucesso');


        this.cdr.detectChanges();
      },

      error: () => {
        this.loading = false;
        this.notification.error('Erro ao carregar transações');

        console.error('Erro ao carregar transações');
      }
    });
  }
  onPageChange(event: PageEvent): void {

    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;

    this.loadTransactions();
  }
}