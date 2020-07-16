import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsMaterialModule } from './products-material.module';
import { ProductsComponent } from './products.component';
import { ReadComponent } from './read/read.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProductService } from './product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        ProductsComponent,
        ReadComponent,
        DialogComponent        
    ],    
    imports: [
        ProductsMaterialModule,
        ProductsRoutingModule
    ],
    providers: [
        ProductService,
        MatSnackBar
    ]    
})

export class ProductsModule {}