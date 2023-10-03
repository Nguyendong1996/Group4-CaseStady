package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Category;
import com.example.modul4_tmdt_group4.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    ICategoryRepository categoryRepository;

    @GetMapping("")
    public ResponseEntity< Iterable<Category>> showList(){
        Iterable<Category> categories = categoryRepository.findAll();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Category>> findOne(@PathVariable ("id") Long id){
        Optional<Category> category = categoryRepository.findById(id);
        return new ResponseEntity<>(category,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> create(@RequestBody Category category){
        categoryRepository.save(category);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PostMapping("/update/{id}")
    public ResponseEntity<Void> update(@RequestBody Category category, @PathVariable ("id") Long id){
        Optional <Category> category1 = categoryRepository.findById(id);
        if(category1.isPresent()){
            category.setId(category1.get().getId());
            categoryRepository.save(category);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable ("id") Long id){
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            categoryRepository.delete(category.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
