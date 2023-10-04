package com.example.modul4_tmdt_group4.service;

import com.example.modul4_tmdt_group4.model.Account;
import com.example.modul4_tmdt_group4.model.Role;
import com.example.modul4_tmdt_group4.model.dto.AccountDTO;

public interface IAccountService extends IService<Account> {
    Account findByUsername(String username);

    AccountDTO toDTO(Account user);

    void save(Account user);

    AccountDTO findAccountDTOById(Long id);
}
