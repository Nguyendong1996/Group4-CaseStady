package com.example.modul4_tmdt_group4.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    @NotNull
    private String account;
    @NotNull
    private String password;
    @NotNull
    private Boolean isActive;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;
}
