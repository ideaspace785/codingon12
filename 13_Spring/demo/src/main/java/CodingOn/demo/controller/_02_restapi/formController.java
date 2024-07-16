package CodingOn.demo.controller._02_restapi;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class formController {

    @GetMapping("form")
    public String getReq() {
        return "_02_restapi/form";
    }
    @GetMapping("introduce/{name}")
    @ResponseBody
    public String Ex1(@PathVariable(value = "name") String name){
        return "내 이름은 "+ name;
    }

    @GetMapping("introduce2")
    @ResponseBody
    public String Ex2(@RequestParam(value = "name")String name,
                        @RequestParam(value = "age")int age){
        return "내 이름은 " + name +System.lineSeparator()+
                "내 나이는 "+ age;
    }
    @PostMapping("/form")
    @ResponseBody
    public String Ex3(@RequestParam String name,
                              @RequestParam String gender,
                              @RequestParam String year,
                              @RequestParam String month,
                              @RequestParam String day,
                              @RequestParam String hobby)
    {
        return "이름: " + name + "<br/>"
                + "성별: " + gender + "<br/>"
                + "생년월일: " + year + "-" + month + "-" + day + "<br/>"
                + "관심사: " + hobby;
    }
}