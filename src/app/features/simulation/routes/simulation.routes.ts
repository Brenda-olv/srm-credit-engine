import { Routes } from '@angular/router';

export const simulationRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./../pages/simulation/simulation').then(m => m.SimulationComponent)
    }
];