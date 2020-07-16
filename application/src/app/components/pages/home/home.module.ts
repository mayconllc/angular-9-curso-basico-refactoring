import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMaterialModule } from './home-material.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [        
        HomeMaterialModule,
        HomeRoutingModule
    ]  
})

export class HomeModule {}