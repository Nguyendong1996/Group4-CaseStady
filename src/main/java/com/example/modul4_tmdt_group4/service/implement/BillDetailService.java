package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.BillDetail;
import com.example.modul4_tmdt_group4.repository.IBillDetailRepository;
import com.example.modul4_tmdt_group4.service.IBillDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BillDetailService implements IBillDetailService {
    @Autowired
    private IBillDetailRepository billDetailRepository;

    @Override
    public Iterable<BillDetail> findAll() {
        return billDetailRepository.findAll();
    }

    @Override
    public Optional<BillDetail> findById(Long id) {
        return billDetailRepository.findById(id);
    }

    @Override
    public void create(BillDetail billDetail) {
        billDetailRepository.save(billDetail);
    }

    @Override
    public void update(BillDetail billDetail) {
        billDetailRepository.save(billDetail);
    }

    @Override
    public void delete(Long id) {
        billDetailRepository.deleteById(id);
    }
}
