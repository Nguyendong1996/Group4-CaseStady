package com.example.modul4_tmdt_group4.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Search {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   private int number1;
    private int number2;
    @ManyToOne
    private Category category;
    @ManyToOne
    private Provider provider;
    private String name;

}
