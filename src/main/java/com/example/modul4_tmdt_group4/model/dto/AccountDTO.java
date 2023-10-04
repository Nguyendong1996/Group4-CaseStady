package com.example.modul4_tmdt_group4.model.dto;


import com.example.modul4_tmdt_group4.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountDTO {
    private Long id;
    private String account;
    private Set<Role> role;
}
