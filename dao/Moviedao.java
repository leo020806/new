package com.example.movie.dao;

import com.example.movie.pojo.Movie;
import com.example.movie.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Moviedao extends JpaRepository<Movie, String> {

    @Query(value="select * from movies where title = ?", nativeQuery = true)
    Movie findByMovietitle(String title);

    @Query(value="select * from movies where movieid = ?", nativeQuery = true)
    Movie findByMovieid(int id);

    @Query(value="select * from movies where movieid = ?", nativeQuery = true)
    List<Movie> findallByMovieid(int id);

    @Query(value="select * from movies", nativeQuery = true)
    List<Movie>findall();

    @Query(value="select * from movies where genres = ? limit 7", nativeQuery = true)
    List<Movie>findgenre(String genres);

    @Query(value="select * from movies where title like CONCAT('%',:moviename,'%')", nativeQuery = true)
    List<Movie>findByMnameLike(@Param("moviename") String moviename);

    @Query(value="select * from movies where genres like CONCAT('%',:genres,'%')", nativeQuery = true)
    List<Movie>findByGenresLike(@Param("genres") String genres);

}
