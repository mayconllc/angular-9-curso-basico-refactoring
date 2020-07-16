import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class ProductService {

  baseUrl: string = 'http://localhost:3000/products'

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(message: string, isError = false) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandle(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product)
      .pipe(map(obj => obj),
        catchError(err => this.errorHandle(err)));
  }

  get(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl)
      .pipe(map(obj => obj),
        catchError(err => this.errorHandle(err)));
  }

  getById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Product>(url)
      .pipe(map(obj => obj),
        catchError(err => this.errorHandle(err)));
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.httpClient.put<Product>(url, product)
      .pipe(map(obj => obj),
        catchError(err => this.errorHandle(err)));;
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<Product>(url)
      .pipe(map(obj => obj),
        catchError(err => this.errorHandle(err)));;
  }
}
