import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';

export const routes: Routes = [
    {
        path:'admin',
        component:Admin
    },
    {
        path:'control-flow',
        component: ControlFlow
    }, 
    {
        path:'data-binding',
        component: DataBinding
    }, 
    {
        path:'signal-ex',
        component:SignalEx
    }, 
    {
        path:'att-directive',
        component:AttDirective
    },
    {
        path:'app-get-api',
        component:GetApi
    },
    {
        path:'app-user',
        component: User
    },
];
