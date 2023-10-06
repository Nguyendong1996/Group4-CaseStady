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

    @PostMapping("")
    public ResponseEntity<List<Product>> fullSearch(@RequestPart("search") Search search){
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


}
