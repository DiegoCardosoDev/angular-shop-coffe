package com.diego.shop.springweb.services;


import com.diego.shop.springweb.entities.Product;
import com.diego.shop.springweb.repositories.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ProductService {


    private ProductRepository productRepository;

    public List<Product> listAll(){
        return this.productRepository.findAll();
    }

    public Product findById(Integer id){
        Optional<Product> product = this.productRepository.findById(id);
        return product.orElseThrow(() -> new RuntimeException("not found" + Product.class.getName()));
    }

    //create
    public Product create(Product obj) {
        obj.setId(null);
        return productRepository.save(obj);
    }

    public void delete(Integer id){
        productRepository.deleteById(id);
    }

    public Product update(Integer id, Product obj) {
        Product newObj = findById(id);
        newObj.setName(obj.getName());
        newObj.setPrice(obj.getPrice());
        return productRepository.save(newObj);

    }
}
