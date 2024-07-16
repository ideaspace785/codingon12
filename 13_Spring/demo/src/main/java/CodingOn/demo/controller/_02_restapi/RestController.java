package CodingOn.demo.controller._02_restapi;


import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class RestController {

//    Template rendering
    @GetMapping("/")
    public String getReq(){return "_02_restapi/req"; }

    @GetMapping("/get/res1")
    public String getReq1(@RequestParam(value="name") String name,
                          @RequestParam(value="age")int age, Model model){
        System.out.println("[GET] request query string (name) = " + name);
        System.out.println("[GET] request query string (age) = " + age);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "_02_restapi/res";
    }

    @GetMapping("/get/res2")
    public String getReq2(@RequestParam(value="name", required = false) String name, Model model){
        System.out.println("[GET] request query string (name) required=false= " + name);

        model.addAttribute("name", name);
        return "_02_restapi/res";
    }

    @GetMapping("/get/res3/{param1}/{param2}")
    public String getReq3(@PathVariable String param1,
                          @PathVariable(value="param2") int age, Model model){
        // @PathVariable 어노테이션
        // - URL path variable 을 사용할 때 필요
        // - 기본적으로 path variable 은 값을 가져야 함. (즉 값이 없다면 404 에러 발생)

        // 참고, URL 의 path variable 과 해당 메소드의 매개변수명을 다르게 사용하고 싶다면 다음과 같이 사용
        // ㄴ ex. @PathVariable(value="param2) int age

        System.out.println("[GET] request path variable (name)= " + param1);
        System.out.println("[GET] request path variable (age)= " + age);
        model.addAttribute("name", param1);
        model.addAttribute("age", age);
        return "_02_restapi/res";
    }
    // 선택적으로 받아오는 path variable 이 있다면 (age), {} 안에 경로를 여러개 설정
    @GetMapping({"/get/res4/{name}/{age}", "/get/res4/{name}"})  // age 변수를 optional 하게 받아올 수 있도록
    public String getReq4(@PathVariable String name,
                          @PathVariable (required = false)Integer age, Model model){
        // path variable 중에서 name(required = true), age (required = false)
        // -중요 optional 한 변수가 맨 뒤에 오도록 설정

        // 참고, age 변수에 Integer type 지정한 이유
        // - age 는 optional 한 값으로 null 가능함
        // - Therefore, the int primitive type cannot be null, so use the reference type Wrapper Object, which can be null.
        System.out.println("[GET] request path variable (name)= " + name);
        System.out.println("[GET] request path variable (age)= " + age);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "_02_restapi/res";
    }
//    ============= POST 요청 ============= 
    @PostMapping("/post/res1")
    public String postRes1(@RequestParam String name, @RequestParam int age,  Model model){
        System.out.println("[POST] request query string (name) = " + name);
        System.out.println("[POST] request query string (age) = " + age);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "_02_restapi/res";
    }
    @PostMapping("/post/res2")
    public String postRes2(@RequestParam String name,
                           @RequestParam (required = false) Integer age,  Model model){
        System.out.println("[POST] request query string (name) = " + name);
        System.out.println("[POST] request query string (age) = " + age);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "_02_restapi/res";
    }
    @PostMapping("/post/res3")
    @ResponseBody
    public String postRes3(@RequestParam String name, @RequestParam int age){
        System.out.println("[POST] request query string (name) = " + name);
        System.out.println("[POST] request query string (age) = " + age);
        return name + " " + age;
    }

}
