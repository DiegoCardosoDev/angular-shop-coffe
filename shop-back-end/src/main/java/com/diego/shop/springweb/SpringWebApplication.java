package com.diego.shop.springweb;

import com.diego.shop.springweb.entities.Product;
import com.diego.shop.springweb.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class SpringWebApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringWebApplication.class, args);
    }

    @Autowired
    private ProductRepository productRepository;
    @Override
    public void run(String... args) throws Exception {

        Product p1 = new Product(null,"matte", 20.0);
        Product p2 = new Product(null,"Cappucino Mate", 15.0);
        Product p3 = new Product(null,"TeaMatte", 15.9);
        Product p4 = new Product(null,"CoffeCreamPlus", 24.0);
        Product p5 = new Product(null,"Coffe+Milk", 25.0);
        Product p6 = new Product(null,"NoSuggar", 18.0);
        Product p7 = new Product(null,"CapuCoffe", 28.0);
        Product p8 = new Product(null,"MilkCream", 27.9);

        productRepository.saveAll(Arrays.asList(p1,p2,p3,p4,p5,p6,p7,p8));

    }
}
