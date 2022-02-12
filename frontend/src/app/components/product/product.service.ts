import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;


  constructor(private snack: MatSnackBar,private http: HttpClient) { }

  showMesage(msg: string,isError: boolean = false): void{
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-fail'] : ['msg-success']
    
    })
  }

  // criar um produto
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
    map(obj => obj),
    catchError(e => this.err (e))
    );
  }

  err(e : any ): Observable<any>{
    this.showMesage('ocoreu um erro...', true);
    return EMPTY

  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.err (e))
    );
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.err (e))
    );

  }


  findById(id: any):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.err (e))
    )

  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.err (e))
    );
    
  }

  delete(id: any): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.err (e))
    );

  }


}
