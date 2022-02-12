import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  product: Product = {
    name: 'CoffeCream',
    price: 12.98
  }


  constructor(private productService: ProductService,
     private router: Router,
     private route: ActivatedRoute) { }

     ngOnInit(): void {
      this.product.id = this.route.snapshot.paramMap.get("id")!;
      this.findById();
  

    }

    findById(): void{
      this.productService.findById(this.product.id).subscribe((resposta) => {
        this.product = resposta
      });
  
    }

  updateProduct(): void{
    this.productService.update(this.product).subscribe((resposta)=>{
      this.productService.showMesage('Produto atualizado!');
      this.router.navigate(['/products']);
    })

  }

  cancel(): void{
    this.productService.showMesage('Cancelado!');
    this.router.navigate(['/products']);
  }


}
