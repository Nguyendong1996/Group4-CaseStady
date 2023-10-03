package com.example.modul4_tmdt_group4.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class CartDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Account account;
    @ManyToOne
    private CartDetail cartDetail;
    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean cartStatus;
}
