import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "header",
        component: HeaderComponent
    }
];
