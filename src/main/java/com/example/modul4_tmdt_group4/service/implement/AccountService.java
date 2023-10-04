package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Account;
import com.example.modul4_tmdt_group4.model.dto.AccountDTO;
import com.example.modul4_tmdt_group4.repository.IAccountRepository;
import com.example.modul4_tmdt_group4.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;



    @Override
    public Iterable<Account> findAll() {
        Iterable<Account> accounts = accountRepository.findAll();
        return accounts;
    }

    @Override
    public Optional<Account> findById(Long id) {
        Optional<Account> account = accountRepository.findById(id);
        return account;
    }

    @Override
    public void create(Account account) {
        accountRepository.save(account);

    }

    @Override
    public void update(Account account) {
        accountRepository.save(account);
    }

    @Override
    public void delete(Long id) {
        Optional<Account> account = accountRepository.findById(id);
       accountRepository.delete(account.get());
    }

    @Override
    public Account findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    @Override
    public AccountDTO toDTO(Account user) {
        return new AccountDTO(user.getId(), user.getAccount(), user.getRoles());
    }

    @Override
    public void save(Account user) {
        accountRepository.save(user);
    }

    @Override
    public AccountDTO findAccountDTOById(Long id) {
        Optional<Account> accountOptional = accountRepository.findById(id);
        return accountOptional.map(this::toDTO).orElse(null);
    }
}
