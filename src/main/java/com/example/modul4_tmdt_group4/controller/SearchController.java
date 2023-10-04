package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Product;
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

    @GetMapping("/{name}")
    public ResponseEntity<List<Product>> searchByName(@PathVariable ("name") String name){
        List<Product> products = searchService.searchByName(name);
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
