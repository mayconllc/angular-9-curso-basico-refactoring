import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';
import { CreateMaterialModule } from './create-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        FormsModule,
        CreateMaterialModule,
        CreateRoutingModule
    ]
})

export class CreateModule {}