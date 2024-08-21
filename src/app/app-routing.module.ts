// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component'; // Ensure this path is correct

const routes: Routes = [
  { path: 'sample', component: SampleComponent }, // Ensure this route is present
  { path: '', redirectTo: '/sample', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' } // Wildcard route for handling 404s
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
