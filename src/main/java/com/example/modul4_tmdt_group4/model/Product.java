package com.example.modul4_tmdt_group4.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private double price;
    private String description;
    private String image;
    @Transient
    private MultipartFile file;
    @ManyToOne
    private Category category;
    @ManyToOne
    private Provider provider;
    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean productStatus;

}
