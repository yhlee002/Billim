package yh.toyproject.Billim.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class CommonController {

    @GetMapping("main")
    public List<String> main() {
        List<String> datas = new ArrayList<>();
        datas.add("Hello");
        return datas;
    }
}

