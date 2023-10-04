package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Product;
import com.example.modul4_tmdt_group4.repository.ISearchingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    @Autowired
    private ISearchingRepository searchingRepository;

    public List<Product> searchByName(String name){
        List<Product> products = searchingRepository.searchByName(name);
        return products;
    }
}
