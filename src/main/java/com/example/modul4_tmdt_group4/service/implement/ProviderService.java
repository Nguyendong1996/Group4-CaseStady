package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Provider;
import com.example.modul4_tmdt_group4.repository.IProviderRepository;
import com.example.modul4_tmdt_group4.service.IProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProviderService implements IProviderService {
    @Autowired
    private IProviderRepository providerRepository;
    @Override
    public Iterable<Provider> findAll() {
        return providerRepository.findAll();
    }

    @Override
    public Optional<Provider> findById(Long id) {
        return providerRepository.findById(id);
    }

    @Override
    public void create(Provider provider) {
        providerRepository.save(provider);
    }

    @Override
    public void update(Provider provider) {
        providerRepository.save(provider);
    }

    @Override
    public void delete(Long id) {
        providerRepository.deleteById(id);
    }
}
