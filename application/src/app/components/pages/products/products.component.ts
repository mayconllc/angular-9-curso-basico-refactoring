import { Component } from '@angular/core';
import { HeaderService } from '../../layout/header/header.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  constructor(private headerService: HeaderService) { 
    headerService.header = {
      title: 'Produtos',
      icon: 'storefront'
    }
  }

}
