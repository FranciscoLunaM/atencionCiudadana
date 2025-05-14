import { Routes } from '@angular/router';
import { CapturaComponent } from './pages/captura/captura.component';
import { StepperComponent } from './components/stepper/stepper.component';

export const routes: Routes = [
    {path: 'peticiones', component:CapturaComponent},
    {path: 'agregar', component:StepperComponent},
];
