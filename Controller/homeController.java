package com.example.movie.Controller;

import com.example.movie.dao.Moviedao;
import com.example.movie.dao.Redao;
import com.example.movie.pojo.Movie;
import com.example.movie.pojo.User;
import com.example.movie.pojo.re;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class homeController {

    @Autowired
    Redao redao;

    @Autowired
    Moviedao moviedao;
    @RequestMapping("/home")
    public String showmovie(HttpServletRequest request, Model model){


        HttpSession session = request.getSession();
        int userid =(Integer) session.getAttribute("userID");


        List movietype = new ArrayList();
        movietype.add("Comedy");
        movietype.add("Action");
        movietype.add("Drama");
        movietype.add("Thriller");


        List<re> byuesrid = redao.findallByuserID(userid);


        List<Movie> comedy = moviedao.findgenre("Comedy");
        List<Movie> action = moviedao.findgenre("Action");
        List<Movie> drama   =  moviedao.findgenre("Drama");
        List<Movie> thriller = moviedao.findgenre("Thriller");


        model.addAttribute("Comedy",comedy);
        model.addAttribute("Action",action);
        model.addAttribute("Drama",drama);
        model.addAttribute("Thriller",thriller);

        if(byuesrid.size() == 0){
            System.out.println("cai");
////                    List<Movie> comedy = new ArrayList<>();
////                    List<Movie> action = new ArrayList<>();
////                    List<Movie> drama = new ArrayList<>();
////                    List<Movie> thriller = new ArrayList<>();
//                    int p = 0;
//            for(int i = 0; i < movietype.size(); i++){
//                List<Movie> temp = moviedao.findgenre((String) movietype.get(i));
////                        List<Movie> x = moviedao.findByMnameLike("Tom");
////                        System.out.println("123"+"     "+x.size());
//                model.addAttribute((String) movietype.get(i),temp);
////                        for (Movie type:temp){
////                            p++;
////                           System.out.println(type.getTitle());
////                        }
//            }

        }else{

            int i = 0; //主页类别展示数量
            List<Movie> removie = new ArrayList();
            for (re u:byuesrid){
                i++;
                if(i>7){
                    break;
                }
                Movie tmovie = moviedao.findByMovieid(u.getMovieid());
                removie.add(tmovie);
            }
//                            for (Movie y:removie){
//                    System.out.println(y.getMid());
//                }
            model.addAttribute("removie",removie);//推荐栏目
        }
        return  "home";
    }
}
