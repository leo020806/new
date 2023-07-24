package com.example.movie.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
public class User {

    private int userid;
    private String username;
    private String password;


    @Id
    @Column(name = "userid", nullable = false)
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    public int getUserid() {
        return userid;
    }
    public void setUserid(int userid) {
        this.userid = userid;
    }

    @Basic
    @Column(name = "username", nullable = true, length = 20)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "password", nullable = true, length = 20)
    public String getUserpwd() {
        return password;
    }

    public void setUserpwd(String password) {
        this.password = password;
    }
}
