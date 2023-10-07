package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Category;
import com.example.modul4_tmdt_group4.model.Product;
import com.example.modul4_tmdt_group4.model.Provider;
import com.example.modul4_tmdt_group4.model.Search;
import com.example.modul4_tmdt_group4.repository.ICategoryRepository;
import com.example.modul4_tmdt_group4.repository.ISearchingRepository;
import com.example.modul4_tmdt_group4.service.implement.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/search")
public class SearchController {
    @Autowired
    private SearchService searchService;
    @Autowired
    ICategoryRepository categoryRepository;
    @Autowired
    private ISearchingRepository searchingRepository;

    @PostMapping("/searchByName")
    public ResponseEntity<List<Product>> searchByName(@RequestBody Search search){
        String name = search.getName();
        List<Product> list = searchingRepository.search14D("%"+name+"%");
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<List<Product>> fullSearch(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        Category category = search.getCategory();
        Provider provider = search.getProvider();
        String name = search.getName();
        List<Product> products = searchingRepository.fullSearch(number1,number2,category.getId(),provider.getId(),"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search1")
    public ResponseEntity<List<Product>> search1(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        Category category = search.getCategory();
        Provider provider = search.getProvider();
        List<Product> products = searchingRepository.search1ABC(number1,number2,category.getId(),provider.getId());
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PostMapping("search2")
    public ResponseEntity<List<Product>> search2(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        Provider provider = search.getProvider();
        String name = search.getName();
        List<Product> products = searchingRepository.search2ACD(number1,number2,provider.getId(),"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search3")
    public ResponseEntity<List<Product>> search3(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        Category category = search.getCategory();
        String name = search.getName();
        List<Product> products = searchingRepository.search3ABD(number1,number2,category.getId(),"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search4")
    public ResponseEntity<List<Product>> search4(@RequestBody Search search){
        Category category = search.getCategory();
        Provider provider = search.getProvider();
        String name = search.getName();
        List<Product> products = searchingRepository.search4BCD(category.getId(),provider.getId(),"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search5")
    public ResponseEntity<List<Product>> search5(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        Category category = search.getCategory();
        List<Product> products = searchingRepository.search5AB(number1,number2,category.getId());
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PostMapping("search6")
    public ResponseEntity<List<Product>> search6(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        Provider provider = search.getProvider();
        List<Product> products = searchingRepository.search6AC(number1,number2,provider.getId());
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PostMapping("search7")
    public ResponseEntity<List<Product>> search7(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        String name = search.getName();
        List<Product> products = searchingRepository.search7AD(number1,number2,"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search8")
    public ResponseEntity<List<Product>> search8(@RequestBody Search search){
        Category category = search.getCategory();
        Provider provider = search.getProvider();
        List<Product> products = searchingRepository.search8BC(category.getId(),provider.getId());
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search9")
    public ResponseEntity<List<Product>> search9(@RequestBody Search search){
        Category category = search.getCategory();
        String name = search.getName();
        List<Product> products = searchingRepository.search9BD(category.getId(),"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search10")
    public ResponseEntity<List<Product>> search10(@RequestBody Search search){
        Provider provider = search.getProvider();
        String name = search.getName();
        List<Product> products = searchingRepository.search10CD(provider.getId(),"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search11")
    public ResponseEntity<List<Product>> search11(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        List<Product> products = searchingRepository.search11A(number1,number2);
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search12")
    public ResponseEntity<List<Product>> search12(@RequestBody Search search){
        Category category = search.getCategory();
        List<Product> products = searchingRepository.search12B(category.getId());
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("search13")
    public ResponseEntity<List<Product>> search13(@RequestBody Search search){
        Provider provider = search.getProvider();

        List<Product> products = searchingRepository.search13C(provider.getId());
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PostMapping("search14")
    public ResponseEntity<List<Product>> search14(@RequestBody Search search){
        int number1=search.getNumber1();
        int number2=search.getNumber2();
        Category category = search.getCategory();
        Provider provider = search.getProvider();
        String name = search.getName();
        List<Product> products = searchingRepository.search14D("%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}