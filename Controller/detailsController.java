package com.example.movie.Controller;

import com.example.movie.dao.Moviedao;
import com.example.movie.dao.Watchlistdao;
import com.example.movie.pojo.watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class detailsController {

    @Autowired
    Moviedao moviedao;

    @Autowired
    Watchlistdao watchlistdao;

    @RequestMapping("/details")
    public String show(@RequestParam("id") int id, Model model, HttpServletRequest request) {

        HttpSession session = request.getSession();
        int userid =(Integer) session.getAttribute("userID");
        String moviename = moviedao.findByMovieid(id).getTitle();
        String text = moviedao.findByMovieid(id).getText();
        double star = moviedao.findByMovieid(id).getStar();
        String murl = moviedao.findByMovieid(id).getMurl();

//        watchlist w = new watchlist();
//        w.setUserid(userid);
//        w.setMovieid(id);
//        w.setMoviename(moviename);
//        watchlistdao.save(w);
        model.addAttribute("userid",userid);
        model.addAttribute("moviename",moviename);
        model.addAttribute("id",id);
        model.addAttribute("text",text);
        model.addAttribute("star",star);
        model.addAttribute("murl",murl);

        return "details";
    }

//    @RequestMapping("/details")
//    public String search(){
//        return "details";
//    }
}
