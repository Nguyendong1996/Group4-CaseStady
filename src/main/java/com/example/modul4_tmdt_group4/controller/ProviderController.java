package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Provider;
import com.example.modul4_tmdt_group4.service.implement.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/provider")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @GetMapping
    public ResponseEntity<Iterable<Provider>> findAll(){
        return new ResponseEntity<>(providerService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Provider> create(@RequestBody Provider provider){
        providerService.create(provider);
        return new ResponseEntity<>(provider,HttpStatus.CREATED);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Provider> update(@RequestBody Provider provider, @PathVariable Long id){
        Optional<Provider> optionalProvider = providerService.findById(id);
        if (optionalProvider.isPresent()){
            provider.setId(optionalProvider.get().getId());
            providerService.update(provider);
            return new ResponseEntity<>(provider,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Provider> delete(@PathVariable Long id){
        Optional<Provider> optionalProvider = providerService.findById(id);
        if (optionalProvider.isPresent()){
            providerService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
