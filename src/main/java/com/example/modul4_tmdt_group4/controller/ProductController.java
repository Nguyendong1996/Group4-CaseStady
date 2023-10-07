package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Category;
import com.example.modul4_tmdt_group4.model.Product;
import com.example.modul4_tmdt_group4.repository.ICategoryRepository;
import com.example.modul4_tmdt_group4.repository.IProductRepository;
import com.example.modul4_tmdt_group4.repository.IProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private IProviderRepository providerRepository;
    @Value("${upload.path}")
    private String upload;
    @GetMapping("")
    public ResponseEntity<Iterable<Product>> showList(){
        Iterable<Product> products = productRepository.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findOne(@PathVariable ("id") Long id){
        Optional<Product> product = productRepository.findById(id);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> create(@RequestPart Product product, @RequestPart(value = "file", required = false) MultipartFile file) {
        if (file != null) {
            String name = file.getOriginalFilename();
            try {
                FileCopyUtils.copy(file.getBytes(), new File(upload + name));
            } catch (Exception e) {
                e.printStackTrace();
            }
            product.setImage(name);
        } else {
            product.setImage("1.jpg");
        }
        productRepository.save(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping ("/update/{id}")
    public ResponseEntity<Void> update(@RequestPart Product product, @RequestPart(value = "file", required = false) MultipartFile file, @PathVariable ("id")Long id){
        Optional<Product> product1 = productRepository.findById(id);
        if(product1.isPresent()){
            product.setId(product1.get().getId());
            if (file != null) {
                String name = file.getOriginalFilename();
                try {
                    FileCopyUtils.copy(file.getBytes(), new File(upload + name));
                } catch (Exception e) {
                    e.printStackTrace();
                }
                product.setImage(name);
            } else {
                product.setImage("1.jpg");
            }
            productRepository.save(product);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable ("id")Long id){
       Optional<Product>  product = productRepository.findById(id);
        if(product.isPresent()){
            productRepository.delete(product.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
