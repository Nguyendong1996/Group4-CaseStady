package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.BillDetail;
import com.example.modul4_tmdt_group4.service.IBillDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/billDetails")
public class BillDetailController {
    @Autowired
    private IBillDetailService billDetailService;
    @GetMapping
    public ResponseEntity<Iterable<BillDetail>> showList(){
        return  new ResponseEntity<>(billDetailService.findAll(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> create(@RequestBody BillDetail billDetail){
        billDetailService.create(billDetail);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
