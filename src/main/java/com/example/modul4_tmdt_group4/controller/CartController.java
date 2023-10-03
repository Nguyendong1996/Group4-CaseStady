package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Cart;
import com.example.modul4_tmdt_group4.service.implement.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/carts")
public class CartController {
    @Autowired
    CartService cartService;
@GetMapping
public ResponseEntity<Iterable<Cart>> showList(){
    return  new ResponseEntity<>(cartService.findAll(), HttpStatus.OK);
}
@PostMapping
    public ResponseEntity<Cart> create(@RequestBody Cart cart){
    cartService.create(cart);
    return new ResponseEntity<>(HttpStatus.CREATED);
}
@PostMapping("/{id}")
    public ResponseEntity<Cart> update(@RequestBody Cart cart ,@PathVariable Long id){
    Optional<Cart> cart1 = cartService.findById(id);
    if (cart1.isPresent()){
        cart.setId(id);
        cartService.update(cart);
        return new ResponseEntity<>(HttpStatus.OK);
    }else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
@DeleteMapping("/{id}")
    public ResponseEntity<Cart> delete(@PathVariable Long id){
    Optional<Cart> cart = cartService.findById(id);
    if (cart.isPresent()) {
        cartService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
}
