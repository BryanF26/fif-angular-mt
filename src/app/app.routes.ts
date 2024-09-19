import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    {path: '',  component: TableComponent},
    {path: 'detail/:id/:methode', component: FormComponent},
    {path: 'error', component: NotFoundComponent},
    {path: '**', redirectTo:'error', pathMatch:'full'}
];
