package com.example.modul4_tmdt_group4.repository;

import com.example.modul4_tmdt_group4.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISearchingRepository extends JpaRepository<Product,Long> {

    // number1 là số min
    // number2 là số max
    // C_id la category_id
    // P_id là provider_id
    // name là chuỗi tên gần đúng trong trường name
    /////////////////////////////**********************************
    // price between number1 and number2 == a
    //category_id=C_id == b
    //provider_id=P_id == c
    //name like '%'name'%' == d



    // a,b,c,d
    @Query(value = "select * from product where price between :number1 and :number2 and category_id=:C_id and provider_id=:P_id and name like :name ", nativeQuery = true)
    List<Product> fullSearch(@Param("number1") int number1, @Param("number2")int number2,
                             @Param("C_id")Long C_id,
                             @Param("P_id")Long P_id,
                             @Param("name")String name);
    //a,b,c (1)
    @Query(value = "select * from product where price between :number1 and :number2 and category_id=:C_id and provider_id=:P_id", nativeQuery = true)
    List<Product> searchABC(@Param("number1") int number1,
                             @Param("number2")int number2,
                             @Param("C_id")Long C_id,
                             @Param("P_id")Long P_id);

    // a,b,d (2)
    @Query(value = "select * from product where price between :number1 and :number2 and provider_id=:P_id and name like :name", nativeQuery = true)
    List<Product> searchABD(@Param("number1") int number1,
                             @Param("number2")int number2,
                             @Param("P_id")Long P_id,
                             @Param("name")String name);
    // a,c,d (3)
    @Query(value = "select * from product where price between :number1 and :number2 and category_id=:C_id and name like :name", nativeQuery = true)
    List<Product> searchACD(@Param("number1") int number1,
                             @Param("number2")int number2,
                             @Param("C_id")Long C_id,
                             @Param("name")String name);
    // b,c,d (4)
    @Query(value = "select * from product where category_id=:C_id and provider_id=:P_id and name like :name", nativeQuery = true)
    List<Product> searchBCD(@Param("C_id")Long C_id,
                             @Param("P_id")Long P_id,
                             @Param("name")String name);
    // a,b (5)
    @Query(value = "select * from product where price between :number1 and :number2 and category_id=:C_id", nativeQuery = true)
    List<Product> searchAB(@Param("number1") int number1,
                             @Param("number2")int number2,
                             @Param("C_id")Long C_id);

    // a,c (6)
    @Query(value = "select * from product where price between :number1 and :number2 and provider_id=:P_id", nativeQuery = true)
    List<Product> searchAC(@Param("number1") int number1,
                             @Param("number2")int number2,

                             @Param("P_id")Long P_id);
    // a,d (7)
    @Query(value = "select * from product where price between :number1 and :number2 and name like :name", nativeQuery = true)
    List<Product> searchAD(@Param("number1") int number1,
                             @Param("number2")int number2,
                             @Param("name")String name);
    // b,c (8)
    @Query(value = "select * from product where category_id=:C_id and provider_id=:P_id", nativeQuery = true)
    List<Product> searchBC(
                          @Param("C_id")Long C_id,
                          @Param("P_id")Long P_id);
    // b,d (9)
    @Query(value = "select * from product where category_id=:C_id and name like :name", nativeQuery = true)
    List<Product> searchBD(@Param("C_id")Long C_id,
                          @Param("name")String name);
    // c,d (10)
    @Query(value = "select * from product where provider_id=:P_id and name like :name", nativeQuery = true)
    List<Product> searchCD(@Param("P_id")Long P_id,
                          @Param("name")String name);
    // a (11)
    @Query(value = "select * from product where price between :number1 and :number2", nativeQuery = true)
    List<Product> searchA(@Param("number1") int number1,
                          @Param("number2")int number2);
    // b (12)
    @Query(value = "select * from product where category_id=:C_id", nativeQuery = true)
    List<Product> searchB(@Param("C_id")Long C_id);
    // c (13)
    @Query(value = "select * from product where provider_id=:P_id", nativeQuery = true)
    List<Product> searchC(@Param("P_id")Long P_id);
    // d (14)
    @Query(value = "select * from product where name like :name", nativeQuery = true)
    List<Product> searchD(@Param("name")String name);

}
