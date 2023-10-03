package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Category;
import com.example.modul4_tmdt_group4.service.ICategoryService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {
    @Override
    public Iterable<Category> findAll() {
        return null;
    }

    @Override
    public Optional<Category> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void create(Category category) {

    }

    @Override
    public void update(Category category) {

    }

    @Override
    public void delete(Long id) {

    }
}
