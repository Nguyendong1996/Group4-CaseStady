package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Provider;
import com.example.modul4_tmdt_group4.service.IProviderService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProviderService implements IProviderService {
    @Override
    public Iterable<Provider> findAll() {
        return null;
    }

    @Override
    public Optional<Provider> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void create(Provider provider) {

    }

    @Override
    public void update(Provider provider) {

    }

    @Override
    public void delete(Long id) {

    }
}
