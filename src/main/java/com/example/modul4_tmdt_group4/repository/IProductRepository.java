package com.example.modul4_tmdt_group4.repository;

import com.example.modul4_tmdt_group4.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository  extends JpaRepository<Product, Long> {
}
