package com.example.modul4_tmdt_group4.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private boolean cartStatus;
    @ManyToOne
    private Account account;
    @ManyToOne
    private CartDetail cartDetail;

}
