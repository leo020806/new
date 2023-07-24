package com.example.movie.pojo;


import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class Movie {

    public int movieid;

    private String title;

    private String genres;

    private String murl;
    private String text;
    private double star;


    @Id
    @Column(name = "movieid", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getMid() {
        return movieid;
    }
    public void setMid(int movieid) {
        this.movieid = movieid;
    }

    @Basic
    @Column(name = "title", nullable = true, length = 50)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "genres", nullable = true, length = 50)
    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    @Basic
    @Column(name = "murl", nullable = true, length = 50)
    public String getMurl() {
        return murl;
    }

    public void setMurl(String murl) {
        this.murl = murl;
    }

    @Basic
    @Column(name = "star", nullable = true, length = 50)
    public double getStar() {
        return star;
    }

    public void setStar(double star) {
        this.star = star;
    }

    @Basic
    @Column(name = "text", nullable = true, length = 50)
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
