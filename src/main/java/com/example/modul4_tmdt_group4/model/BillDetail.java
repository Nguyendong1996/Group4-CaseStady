package com.example.modul4_tmdt_group4.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class BillDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Product product;
    @NotNull
    private Long quantity;
    @NotNull
    private Double billPrice;
    @ManyToOne
    private Bill bill;
}
