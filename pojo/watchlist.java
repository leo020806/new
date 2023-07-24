package com.example.movie.pojo;

import javax.persistence.*;

@Entity
public class watchlist {

    private int wid;
    private int userid;
    private int movieid;
    private String moviename;


    @Id
    @Column(name = "wid", nullable = false)
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    public int getWid() {
        return wid;
    }
    public void setWid(int wid) {
        this.wid = wid;
    }

    @Basic
    @Column(name = "userid", nullable = true, length = 20)
    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }


    @Basic
    @Column(name = "movieid", nullable = true, length = 20)
    public int getMovieid() {
        return movieid;
    }

    public void setMovieid(int movieid) {
        this.movieid = movieid;
    }

    @Basic
    @Column(name = "moviename", nullable = true, length = 20)
    public String getMoviename() {
        return moviename;
    }

    public void setMoviename(String moviename) {
        this.moviename = moviename;
    }

}
