package com.example.modul4_tmdt_group4.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
public class Search implements Serializable {
    private Long id;
    private int number1;
    private int number2;
    private Category category;
    private Provider provider;
    private String name;

    public Search() {
    }

    public Search(int number1, int number2, Category category, Provider provider) {
        this.number1 = number1;
        this.number2 = number2;
        this.category = category;
        this.provider = provider;
    }

    public Search(int number1, int number2, Provider provider, String name) {
        this.number1 = number1;
        this.number2 = number2;
        this.provider = provider;
        this.name = name;
    }

    public Search(int number1, int number2, Category category, String name) {
        this.number1 = number1;
        this.number2 = number2;
        this.category = category;
        this.name = name;
    }

    public Search(Category category, Provider provider, String name) {
        this.category = category;
        this.provider = provider;
        this.name = name;
    }

    public Search(int number1, int number2, Category category) {
        this.number1 = number1;
        this.number2 = number2;
        this.category = category;
    }

    public Search(int number1, int number2, Provider provider) {
        this.number1 = number1;
        this.number2 = number2;
        this.provider = provider;
    }

    public Search(int number1, int number2, String name) {
        this.number1 = number1;
        this.number2 = number2;
        this.name = name;
    }

    public Search(Category category, Provider provider) {
        this.category = category;
        this.provider = provider;
    }

    public Search(Category category, String name) {
        this.category = category;
        this.name = name;
    }

    public Search(Provider provider, String name) {
        this.provider = provider;
        this.name = name;
    }

    public Search(int number1, int number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    public Search(Category category) {
        this.category = category;
    }

    public Search(Provider provider) {
        this.provider = provider;
    }

    public Search(String name) {
        this.name = name;
    }

    public Search(int number1, int number2, Category category, Provider provider, String name) {
        this.number1 = number1;
        this.number2 = number2;
        this.category = category;
        this.provider = provider;
        this.name = name;
    }
}
