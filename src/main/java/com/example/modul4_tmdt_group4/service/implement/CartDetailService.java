package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.CartDetail;
import com.example.modul4_tmdt_group4.service.ICartDetailService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartDetailService implements ICartDetailService {
    @Override
    public Iterable<CartDetail> findAll() {
        return null;
    }

    @Override
    public Optional<CartDetail> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void create(CartDetail cartDetail) {

    }

    @Override
    public void update(CartDetail cartDetail) {

    }

    @Override
    public void delete(Long id) {

    }
}
