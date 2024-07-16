package CodingOn.demo.controller._01_thymeleaf;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class PeopleController {
    @GetMapping("people")
    public String getPeople(Model model) {
        ArrayList<Person> personArrayList=new ArrayList<>();
        personArrayList.add(new Person("코딩온", 10));
        personArrayList.add(new Person("홍길동", 20));
        personArrayList.add(new Person("너밍", 25));
        personArrayList.add(new Person("노현희", 25));

        model.addAttribute("people", personArrayList);

        // template 파일 명 반환
        // src/resources/templates/_01_thymeleaf/people.html  반환
        return "_01_thymeleaf/people";
    }
    class Person{
        private int age;
        private String name;
        public Person(String name, int age) {
            this.age=age;
            this.name= name;
        }
        public int getAge() {
            return age;
        }
        public String getName() {
            return name;
        }
    }
}
