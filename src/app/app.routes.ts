import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch:'full' },
    {path: 'landing',  component: LandingComponent, canActivate:[AuthGuard]},
    {path: 'detail/:id/:methode', component: DetailUserComponent},
    {path: 'login', component: LoginComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo:'404', pathMatch:'full'}
];
