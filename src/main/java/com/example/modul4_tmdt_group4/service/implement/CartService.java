package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Cart;
import com.example.modul4_tmdt_group4.service.ICartService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService implements ICartService {
    @Override
    public Iterable<Cart> findAll() {
        return null;
    }

    @Override
    public Optional<Cart> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void create(Cart cart) {

    }

    @Override
    public void update(Cart cart) {

    }

    @Override
    public void delete(Long id) {

    }
}
