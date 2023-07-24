package com.example.movie.Controller;

import com.example.movie.dao.Moviedao;
import com.example.movie.pojo.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Controller
public class searchController {

    @Autowired
    Moviedao moviedao;

    @RequestMapping("/search")
    public String search(){

////        Movie byMoviename = moviedao.findByMoviename(moviename);
//        if(byMoviename == null){
//            System.out.println("库中无该电影");
//            String msg = "库中无该电影";
//            model.addAttribute("msg",msg);
//        }else{
//            model.addAttribute("msg",byMoviename.getMurl());
//            System.out.println(byMoviename.getMurl());
//        }
        return "/search";
    }


//@RequestMapping("/searchcon1")
//public String searchall(Model model, HttpServletResponse response, HttpServletRequest request) {
//
//    List<Movie>byMovie = moviedao.findall();
//    Iterator<Movie>nameIterator = byMovie.iterator();
//    HttpSession session = request.getSession(true);
//    Integer userid= (Integer) session.getAttribute("userid");
//    System.out.println("111111"+userid);
//    while (nameIterator.hasNext()) {
//        Movie name = nameIterator.next();
//        System.out.println(name.getMid());
//        model.addAttribute("msg", name.getMurl());
//    }
//
//    response.addHeader("x-frame-options","SAMEORIGIN");
//    return "/search";
//    }

    @ResponseBody
    @RequestMapping("/searchlike")
    public List searchall(@RequestBody String title) {


        List<Movie> sm = moviedao.findByMnameLike(title);
        List<Movie> st = moviedao.findByGenresLike(title);
        int s1 = sm.size();
        int s2 = st.size();
        if(s1 >= s2 && s1 >= 40){
            return sm;
        }
        if(s1 <= s2 && s2 >= 40){
            return st;
        }
        if(s1 + s2 <= 40){
            List<Movie> temp = new ArrayList<>();
            for(Movie u:sm){
                temp.add(u);
            }
            for(Movie u:st){
                temp.add(u);
            }
            return  temp;
        }
        return sm;
    }

}

