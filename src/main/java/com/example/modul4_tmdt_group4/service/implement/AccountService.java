package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Account;
import com.example.modul4_tmdt_group4.service.IAccountService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService implements IAccountService {
    @Override
    public Iterable<Account> findAll() {
        return null;
    }

    @Override
    public Optional<Account> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void create(Account account) {

    }

    @Override
    public void update(Account account) {

    }

    @Override
    public void delete(Long id) {

    }
}
