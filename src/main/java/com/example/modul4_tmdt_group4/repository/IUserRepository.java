package com.example.modul4_tmdt_group4.repository;

import com.example.modul4_tmdt_group4.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}
