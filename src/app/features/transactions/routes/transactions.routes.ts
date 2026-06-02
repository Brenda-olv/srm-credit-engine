import { Routes } from '@angular/router';

export const transactionsRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./../pages/transactions/transactions').then(m => m.TransactionsComponent)
    }
];