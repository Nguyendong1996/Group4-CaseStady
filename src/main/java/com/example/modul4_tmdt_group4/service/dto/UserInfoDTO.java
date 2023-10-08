package com.example.modul4_tmdt_group4.service.dto;

import java.util.List;

public class UserInfoDTO {

    private Long id;
    private String username;
    private String email;

    private List<String> role;

    private String jwt;

    public UserInfoDTO(Long id, String username, String email, List<String> role, String jwt) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        this.jwt = jwt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getRole() {
        return role;
    }

    public void setRole(List<String> role) {
        this.role = role;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
