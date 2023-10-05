package com.example.modul4_tmdt_group4.service.implement;


import com.example.modul4_tmdt_group4.model.Account;
import com.example.modul4_tmdt_group4.model.AccountDetailsImpl;
import com.example.modul4_tmdt_group4.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class AccountDetailsServiceImpl implements UserDetailsService {
    @Autowired
    AccountRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        return AccountDetailsImpl.build(user);
    }
}
