package com.example.modul4_tmdt_group4.service;

import java.util.List;
import java.util.Optional;

public interface IService<E> {
    public Iterable<E> findAll();

    public Optional<E> findById(Long id);

    public void create(E e);

    public void update(E e);

    public void delete(Long id);
}