package com.example.modul4_tmdt_group4.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Data
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Cart cart;
    @NotNull
    private LocalDateTime localDateTime;
    @NotNull
    private Double totalPrice;
}
