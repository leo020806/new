package com.example.movie.Controller;


import com.example.movie.dao.Moviedao;
import com.example.movie.dao.Userdao;
import com.example.movie.dao.Watchlistdao;
import com.example.movie.pojo.Movie;
import com.example.movie.pojo.watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class watchlistController {
    @Autowired
    Moviedao moviedao;

    @Autowired
    Userdao userdao;
    @Autowired
    Watchlistdao watchlistdao;

//    @RequestMapping("/test")
//    public String addmovie(){
//        watchlist w = new watchlist();
//        w.setUserid(1);
//        w.setMovieid(1);
//        w.setMoviename("123");
//        watchlistdao.save(w);
//        return "test";
//    }
    @ResponseBody
    @RequestMapping("/movieadd")
    public int addmovies(@RequestBody int mid, HttpServletRequest request) {

        HttpSession session = request.getSession();
        int userid =(Integer) session.getAttribute("userID");
        String moviename = moviedao.findByMovieid(mid).getTitle();
        watchlist w = new watchlist();
        w.setUserid(userid);
        w.setMovieid(mid);
        w.setMoviename(moviename);
        watchlistdao.save(w);

        System.out.println(mid);
        System.out.println(userid);
        return mid;
    }

//    @RequestMapping("/test")
//    public String deletemovie(){
//        int x = watchlistdao.deleteById(1,1);
//        System.out.println(x);
//        return "test";
//    }

    @RequestMapping("/movielist")
    public String watchilist(HttpServletRequest request, Model model){

        HttpSession session = request.getSession();
        int userid = (Integer) session.getAttribute("userID");
        List<Movie> url = new ArrayList<>();
        List<watchlist> rlist = watchlistdao.findByuserId(userid);

        for(watchlist temp:rlist){
            int mid = temp.getMovieid();
            url.add(moviedao.findByMovieid(mid));
        }

        model.addAttribute("reurl",url);
        return "movielist";
    }
}
