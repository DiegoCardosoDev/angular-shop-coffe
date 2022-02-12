import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

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

    deleteProduct(): void{
      this.productService.delete(this.product.id).subscribe(()=>{
        this.productService.showMesage('PRODUTO EXCLUIDO COM SUCESSO!')
        this.router.navigate(['/products']);

      })
     
  
    }


  cancel(): void{
    this.productService.showMesage('OPERAÇÃO CANCELADA!');
    this.router.navigate(['/products']);
  }

}
