import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private service: ProductService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.service.get().subscribe(products => {
      this.products = products;
    })
  }

  openDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.delete(id);
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      this.service.showMessage('Produto excluído com sucesso.');
      this.removeFromPage(id);
    })
  }

  removeFromPage(id: number){
    this.products = this.products.filter(x => x.id !== id);
  }
}
