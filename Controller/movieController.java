package com.example.movie.Controller;

import com.example.movie.dao.Moviedao;
import com.example.movie.pojo.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class movieController {

    @Autowired
    Moviedao moviedao;

    @ResponseBody
    @RequestMapping("/moviefind")
    public List searchall(@RequestBody String type) {

        System.out.println(type);

        List<Movie> movielist = moviedao.findByGenresLike(type);


        return movielist;
    }
}
