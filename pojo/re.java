package com.example.movie.pojo;

import javax.persistence.*;

@Entity
public class re {


    private int userID;
    private int movieid;
    private float rating;


    @Id
    @Column(name = "userID", nullable = false)
    public int getUserid() {
        return userID;
    }
    public void setUserid(int userID) {
        this.userID = userID;
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
    @Column(name = "rating", nullable = true, length = 20)
    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }




}
