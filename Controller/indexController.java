package com.example.movie.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class indexController {
    @RequestMapping("/index.html")
    public String index(){
        return "index";
    }
    @RequestMapping("/movie")
    public String search(){
        return "movie";
    }

}
