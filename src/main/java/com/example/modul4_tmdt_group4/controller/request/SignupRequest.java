package com.example.modul4_tmdt_group4.controller.request;

import javax.persistence.Column;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

public class SignupRequest {

    private String username;
    private String password;
    private String email;
    @NotNull(message = "vui lòng nhập tên")
    @Size(min = 2)
    private String name;

    @NotNull(message = "vui lòng nhập địa chỉ")
    @Size(min = 3)
    private String address;

    @NotNull(message = "vui lòng nhập số điện thoại")
    @Size(min = 5)
    private String phoneNumber;


    public SignupRequest(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
