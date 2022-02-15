package com.diego.shop.springweb.controllers;

import com.diego.shop.springweb.entities.Product;
import com.diego.shop.springweb.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@AllArgsConstructor
@CrossOrigin("*")
@RestController
@RequestMapping(value = "/products")
public class ProductController {


    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> listAll(){
        List<Product> list = productService.listAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Product> findById(@PathVariable Integer id){
        Product product = productService.findById(id);
        return ResponseEntity.ok().body(product);
    }

    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product){
        productService.create(product);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(product.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Product> update(@PathVariable Integer id, @RequestBody Product obj){
        Product newObj = productService.update(id,obj);
        return  ResponseEntity.ok().body(newObj);

    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        productService.delete(id);
        return  ResponseEntity.noContent().build();
    }

}
