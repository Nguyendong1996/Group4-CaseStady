package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Bill;
import com.example.modul4_tmdt_group4.repository.IBillRepository;
import com.example.modul4_tmdt_group4.service.IBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BillService implements IBillService {
    @Autowired
    private IBillRepository billRepository;

    @Override
    public Iterable<Bill> findAll() {
        return billRepository.findAll();
    }

    @Override
    public Optional<Bill> findById(Long id) {
        return billRepository.findById(id);
    }

    @Override
    public void create(Bill bill) {
        billRepository.save(bill);
    }

    @Override
    public void update(Bill bill) {
        billRepository.save(bill);
    }

    @Override
    public void delete(Long id) {
        billRepository.deleteById(id);
    }
    @Override
    public Long createBill(Bill bill) {
        Bill createdBill = billRepository.save(bill);
        return createdBill.getId();
}
}
