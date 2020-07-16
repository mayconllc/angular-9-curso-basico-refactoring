import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutMaterialModule } from './layout-material.module';

@NgModule(
    {
        declarations: [
            NavigationComponent,
            HeaderComponent,
            FooterComponent
        ],
        imports: [
            RouterModule,
            LayoutMaterialModule
        ],
        exports: [
            NavigationComponent,
            HeaderComponent,
            FooterComponent
        ]
    }
)

export class LayoutModule {}