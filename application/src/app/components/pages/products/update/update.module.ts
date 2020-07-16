import { NgModule } from '@angular/core';
import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { UpdateMaterialModule } from './update-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UpdateComponent
    ],
    imports: [
        FormsModule,
        UpdateMaterialModule,
        UpdateRoutingModule
    ]
})

export class UpdateModule {}