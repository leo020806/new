package com.example.movie.Controller;

import com.example.movie.dao.Moviedao;
import com.example.movie.dao.Redao;
import com.example.movie.dao.Userdao;
import com.example.movie.pojo.Movie;
import com.example.movie.pojo.User;
import com.example.movie.pojo.re;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.ArrayList;

@Controller
public class loginController {

    @Autowired
    Userdao userdao;

    @Autowired
    Redao redao;

    @Autowired
    Moviedao moviedao;

    @RequestMapping("/userlogin")
    public String login(@RequestParam() String username, @RequestParam() String password, Model model, HttpServletRequest request){
//        System.out.println(userdao);
        User byUsername = userdao.findByUsername(username);
//        List movietype = new ArrayList();
//        movietype.add("Comedy");
//        movietype.add("Action");
//        movietype.add("Drama");
//        movietype.add("Thriller");
        if(byUsername != null){
            if(byUsername.getUserpwd().equals(password)){
                HttpSession session = request.getSession();

                session.setAttribute("userName",byUsername.getUsername());
                session.setAttribute("userID",byUsername.getUserid());

//                String IDerror = "账号错误";
//                System.out.print("账号错误");
//                model.addAttribute("msg",IDerror);
            }else{
                String passworderror = "密码错误";
                System.out.print("密码错误");
                model.addAttribute("msg",passworderror);
                return "index";
            }
            return "redirect:/home";
        }
        else {
            String msg = "账号不存在请注册";
            System.out.print("账号不存在请注册");
            model.addAttribute("msg",msg);
        }
        return "index";
    }


    @RequestMapping("/userregis")
    public String Regist(@RequestParam () String username, @RequestParam () String password, Model model){
        System.out.println(userdao);
        User ruser = userdao.findByUsername(username);
        if(ruser==null){
                User temp_user = new User();
                temp_user.setUsername(username);
                temp_user.setUserpwd(password);
                userdao.save(temp_user);
        }else {
            if(ruser.getUsername().equals(username)){
                String usererror = "用户已经存在";
                System.out.print("用户已经存在");
                model.addAttribute("msg",usererror);
            }
        }
        return "index";
    }
}
