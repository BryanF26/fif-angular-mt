import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from '../guards/auth.guard';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/login/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch:'full' },
    {path: 'landing',  component: TableComponent, canActivate:[AuthGuard]},
    {path: 'detail/:id/:methode', component: FormComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo:'404', pathMatch:'full'}
];
