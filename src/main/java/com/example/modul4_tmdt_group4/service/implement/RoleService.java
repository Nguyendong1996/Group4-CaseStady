package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Role;
import com.example.modul4_tmdt_group4.repository.IRoleRepository;
import com.example.modul4_tmdt_group4.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;

public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository iRoleRepository;
    @Override
    public Role findOne(Long id) {
        return iRoleRepository.findById(id).orElse(null);
    }

    @Override
    public Iterable<Role> findAll() {
        return iRoleRepository.findAll();
    }
}
