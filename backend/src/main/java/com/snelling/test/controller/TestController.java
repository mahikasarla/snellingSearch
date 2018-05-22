package com.snelling.test.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.ZoneId;

@CrossOrigin
@RestController
public class TestController {

    @GetMapping("/now")
    public Long now(){
        return LocalDateTime.now().atZone(ZoneId.of("Asia/Dhaka")).toInstant().toEpochMilli();
    }
}
