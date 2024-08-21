import { Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

export const routes: Routes = [
  { path: 'sample', component: SampleComponent }, // Ensure this route is present
  { path: '', redirectTo: '/sample', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' } // Wildcard route for handling 404s
];
