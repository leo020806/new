package com.example.movie.dao;

import com.example.movie.pojo.Movie;
import com.example.movie.pojo.re;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Redao extends JpaRepository<re, String> {

//    @Query(value="select * from re where userID = ?", nativeQuery = true)
//    re findByuserID(int userID);

//    @Query(value="select * from re where userID = ?", nativeQuery = true)

    @Query(value="select @rownum \\:= @rownum + 1 as userid,r.* from re r,(select @rownum\\:=0) h where r.userID=?1", nativeQuery = true)
    List<re> findallByuserID(int userID);

}
