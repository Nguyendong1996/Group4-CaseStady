package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.CartDetail;
import com.example.modul4_tmdt_group4.service.ICartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("api/cartDetails")
public class CartDetailController {
    @Autowired
    ICartDetailService cartDetailService;
    @GetMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<Iterable<CartDetail>> showList(){
        return new ResponseEntity<>(cartDetailService.findAll(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<CartDetail> create(@RequestBody CartDetail cartDetail){
        cartDetailService.create(cartDetail);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<CartDetail> cartDetail = cartDetailService.findById(id);
        if (cartDetail.isPresent()){
            return new ResponseEntity<>(cartDetail,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody CartDetail cartDetail){
        Optional<CartDetail> cartDetail1 = cartDetailService.findById(id);
        if (cartDetail1.isPresent()){
            cartDetail.setId(id);
            cartDetailService.update(cartDetail);
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        Optional<CartDetail> cartDetail = cartDetailService.findById(id);
        if (cartDetail.isPresent()){
            cartDetailService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
