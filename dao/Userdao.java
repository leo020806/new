package com.example.movie.dao;

import com.example.movie.pojo.User;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface Userdao extends JpaRepository<User, String> {

    @Query(value="select * from user where username = ?", nativeQuery = true)
    User findByUsername(String username);

    @Query(value="insert into user (userid, username, password) values (?1,?2,?3)", nativeQuery = true)
    void insertByUsername(String username,String password);
}
