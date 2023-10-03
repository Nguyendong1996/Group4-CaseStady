package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.CartDetail;
import com.example.modul4_tmdt_group4.repository.ICartDetailRepository;
import com.example.modul4_tmdt_group4.service.ICartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartDetailService implements ICartDetailService {
    @Autowired
    ICartDetailRepository cartDetailRepository;

    @Override
    public Iterable<CartDetail> findAll() {
        return cartDetailRepository.findAll();
    }

    @Override
    public Optional<CartDetail> findById(Long id) {
        return cartDetailRepository.findById(id);
    }

    @Override
    public void create(CartDetail cartDetail) {
        cartDetailRepository.save(cartDetail);
    }

    @Override
    public void update(CartDetail cartDetail) {
        cartDetailRepository.save(cartDetail);
    }

    @Override
    public void delete(Long id) {
        cartDetailRepository.deleteById(id);
    }
}
