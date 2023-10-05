package com.example.modul4_tmdt_group4.repository;

import com.example.modul4_tmdt_group4.model.Role;
import com.example.modul4_tmdt_group4.model.enums.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}