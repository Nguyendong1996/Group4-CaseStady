package com.example.modul4_tmdt_group4.service;

import com.example.modul4_tmdt_group4.model.Bill;

public interface IBillService extends IService<Bill> {
    Long createBill(Bill bill);
}
