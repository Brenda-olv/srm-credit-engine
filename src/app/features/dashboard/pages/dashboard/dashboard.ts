import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../transactions/services/transactions.service';
import { Transactions } from '../../../transactions/models/transactions.model';
import { DecimalPipe } from '@angular/common';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {

  transactions: Transactions[] = [];

  volumeTotal = 0;
  operacoesUSD = 0;
  spreadMedio = 0;
  liquidacoesHoje = 0;

  constructor(private transactionsService: TransactionsService,
    private notification: NotificationService

  ) { }

  ngOnInit(): void {
    this.loadDashboard();
  }

  private loadDashboard(): void {

    this.transactions = this.transactionsService.getAllTransactions();

    this.calculateMetrics();

    this.notification.success('Dashboard carregado com sucesso');

  }

  private calculateMetrics(): void {

    this.volumeTotal = this.transactions.reduce(
      (acc, t) => acc + t.valor,
      0
    );

    this.operacoesUSD = this.transactions.filter(
      t => t.moeda === 'USD'
    ).length;

    const spreads = this.transactions.map(t => (t.valor % 7) + 1);

    this.spreadMedio =
      spreads.reduce((acc, s) => acc + s, 0) / spreads.length;

    const today = new Date().toISOString().split('T')[0];

    this.liquidacoesHoje = this.transactions.filter(
      t => t.data === today
    ).length;
  }
}