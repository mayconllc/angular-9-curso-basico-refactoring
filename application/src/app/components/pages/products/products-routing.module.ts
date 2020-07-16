import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const route: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
    },
    {
        path: 'edit/:id',
        loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule {}