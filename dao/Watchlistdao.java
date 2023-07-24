package com.example.movie.dao;

import com.example.movie.pojo.Movie;
import com.example.movie.pojo.User;
import com.example.movie.pojo.watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface Watchlistdao extends JpaRepository<watchlist, String> {

    @Query(value="select * from watchlist where userid = ? and movieid = ? ", nativeQuery = true)
    watchlist findById(int userid, int movieid);

    @Query(value="select * from watchlist where userid = ? ", nativeQuery = true)
    List<watchlist> findByuserId(int userid);

    @Modifying
    @Transactional(rollbackFor=Exception.class)
    @Query(value="delete from watchlist where userid = ? and movieid = ? ", nativeQuery = true)
    int deleteById(int userid, int movieid);
}
