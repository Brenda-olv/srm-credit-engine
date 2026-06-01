import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard';
import { SimulationComponent } from './features/simulation/pages/simulation/simulation';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'simulation',
                component: SimulationComponent
            },
        ]
    }
];
