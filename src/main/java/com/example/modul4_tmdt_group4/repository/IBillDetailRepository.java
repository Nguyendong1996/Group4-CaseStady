package com.example.modul4_tmdt_group4.repository;

import com.example.modul4_tmdt_group4.model.BillDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBillDetailRepository extends JpaRepository<BillDetail,Long> {
}
