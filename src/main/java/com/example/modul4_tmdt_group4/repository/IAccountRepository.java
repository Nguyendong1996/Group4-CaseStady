package com.example.modul4_tmdt_group4.repository;

import com.example.modul4_tmdt_group4.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository  extends JpaRepository<Account, Long> {
    Account findByUsername(String account);
}
