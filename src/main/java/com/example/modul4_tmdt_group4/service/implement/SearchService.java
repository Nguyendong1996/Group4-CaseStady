package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.model.Category;
import com.example.modul4_tmdt_group4.model.Product;
import com.example.modul4_tmdt_group4.repository.ICategoryRepository;
import com.example.modul4_tmdt_group4.repository.ISearchingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    @Autowired
    private ISearchingRepository searchingRepository;

    public List<Product> search(int number1,
                                int number2,
                                Long C_id,
                                Long P_id,
                                String name){


        return null;
    }


}
