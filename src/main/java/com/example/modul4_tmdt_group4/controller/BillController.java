package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Bill;
import com.example.modul4_tmdt_group4.service.IBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/bills")
public class BillController {
    @Autowired
    private IBillService billService;
    @GetMapping
    public ResponseEntity<Iterable<Bill>> showList(){
        return new ResponseEntity<>(billService.findAll(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Bill bill){
        billService.create(bill);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
