import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  product: Product;

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(+id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(){
    this.service.update(this.product).subscribe(() => {
      this.service.showMessage('Produto alterado com sucesso.');
      this.cancel();
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
