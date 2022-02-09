import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
  }

  createproduct(): void{

    this.productService.showMesage('salvo com suceso!')
    this.router.navigate(['/products'])


  }
  cancel(): void{

    this.productService.showMesage('cancelado!')
    this.router.navigate(['/products'])
  

  }

  

}
