import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./components/pages/products/products.module').then(m => m.ProductsModule)
    },
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}