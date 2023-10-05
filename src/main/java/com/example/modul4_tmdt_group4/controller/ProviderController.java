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


}
