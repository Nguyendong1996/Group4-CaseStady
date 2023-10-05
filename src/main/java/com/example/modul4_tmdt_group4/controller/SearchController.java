package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Product;
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

    @GetMapping("/{number1}/{number2}/{C_id}/{D_id}/{name}")
    public ResponseEntity<List<Product>> fullsearch( @PathVariable ("number1") int number1,
                                                     @PathVariable ("number2") int number2,
                                                     @PathVariable ("C_id") Long C_id,
                                                     @PathVariable ("D_id") Long D_id,
                                                     @PathVariable ("name") String name){
        List<Product> products = searchingRepository.fullSearch(number1,number2,C_id,D_id,"%"+name+"%");
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


}
