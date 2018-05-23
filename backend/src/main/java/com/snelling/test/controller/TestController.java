package com.snelling.test.controller;

import com.snelling.test.service.SomeService;
import org.springframework.http.MediaType;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.ZoneId;

@RestController
public class TestController {

    private SomeService someService;
    private Twitter twitter;
    private ConnectionRepository connectionFactory;

    public TestController(SomeService someService, Twitter twitter, ConnectionRepository connectionFactory) {
        this.someService = someService;
        this.twitter = twitter;
        this.connectionFactory = connectionFactory;
    }

    @GetMapping("/now")
    public Long now() {
        return LocalDateTime.now().atZone(ZoneId.of("Asia/Dhaka")).toInstant().toEpochMilli();
    }

    @GetMapping(value = "/twitter/trends", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String getTrendingTweets() {
        return someService.getTrendingTweets();
    }

    @GetMapping("/twitter/isLoggedIn")
    public Boolean isLoggedInTwitter() {
        return someService.isAuthenticated();
    }

    @GetMapping("/connect/twitter")
    public String connect(@RequestParam("oauth_token") String oauthToken, @RequestParam("oauth_verifier") String oauthVerifier) {
        System.out.println(oauthToken);
        System.out.println(oauthVerifier);
        System.out.println("\n\n\n\n\\n\n\n\nn\\n");
        connectionFactory.findAllConnections().entrySet().forEach(s -> System.out.println(s));
        return null;
    }
}
