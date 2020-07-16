import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsMaterialModule } from './products-material.module';

import { ProductsComponent } from './products.component';
import { ReadComponent } from './read/read.component';

import { ProductService } from './product.service';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ReadComponent,
        DialogComponent     
    ],    
    imports: [        
        FormsModule,
        ProductsMaterialModule,
        ProductsRoutingModule
    ],
    providers: [
        ProductService
    ],
    entryComponents: [DialogComponent],    
})

export class ProductsModule {}