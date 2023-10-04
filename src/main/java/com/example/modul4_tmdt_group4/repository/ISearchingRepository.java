package com.example.modul4_tmdt_group4.repository;

import com.example.modul4_tmdt_group4.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISearchingRepository extends JpaRepository<Product, Long> {
    @Query(value = "select * from product where name like '%' ? '%'", nativeQuery = true)
    List<Product> searchByName(String name);
}
