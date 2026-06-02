import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./features/dashboard/routes/dashboard.routes')
                        .then(m => m.dashboardRoutes)
            },

            {
                path: 'simulation',
                loadChildren: () =>
                    import('./features/simulation/routes/simulation.routes')
                        .then(m => m.simulationRoutes)
            },

            {
                path: 'transactions',
                loadChildren: () =>
                    import('./features/transactions/routes/transactions.routes')
                        .then(m => m.transactionsRoutes)
            }
        ]
    }
];