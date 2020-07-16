import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private service: ProductService, private router: Router) { }
  
  createProduct() {
    this.service.create(this.product).subscribe(() => {
      this.service.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    });    
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
