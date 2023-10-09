package com.example.modul4_tmdt_group4.controller;

import com.example.modul4_tmdt_group4.model.Account;
import com.example.modul4_tmdt_group4.repository.AccountRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    private final AccountRepository accountRepository;

    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @GetMapping("/username")
    public ResponseEntity<Optional<Account>> getInforAccount(@PathVariable("username") String username){
        return new ResponseEntity<>(accountRepository.findByUsername(username), HttpStatus.OK);
    }
}
