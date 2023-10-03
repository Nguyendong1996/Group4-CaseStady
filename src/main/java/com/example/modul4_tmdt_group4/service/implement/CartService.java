package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Cart;
import com.example.modul4_tmdt_group4.repository.ICartRepository;
import com.example.modul4_tmdt_group4.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService implements ICartService {
    @Autowired
    ICartRepository cartRepository;

    @Override
    public Iterable<Cart> findAll() {
        return cartRepository.findAll();
    }

    @Override
    public Optional<Cart> findById(Long id) {
        return cartRepository.findById(id);
    }

    @Override
    public void create(Cart cart) {
        cartRepository.save(cart);
    }

    @Override
    public void update(Cart cart) {
        cartRepository.save(cart);
    }

    @Override
    public void delete(Long id) {
        cartRepository.deleteById(id);
    }
}
