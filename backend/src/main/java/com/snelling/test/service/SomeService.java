package com.snelling.test.service;

import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.twitter.api.SavedSearch;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.stereotype.Service;

@Service
public class SomeService {

    private final Twitter twitter;
    private final ConnectionRepository connectionRepository;

    public SomeService(Twitter twitter, ConnectionRepository connectionRepository){
        this.twitter = twitter;
        this.connectionRepository = connectionRepository;
    }

    public boolean isAuthenticated(){
        return connectionRepository.findPrimaryConnection(Twitter.class) != null;
    }
    public String getTrendingTweets(){
        Connection<Twitter> primaryConnection = connectionRepository.findPrimaryConnection(Twitter.class);
        System.out.println("primaryConnection: "+primaryConnection);
        boolean authorized = twitter.isAuthorized();
        System.out.println("authorized: "+authorized);
        SavedSearch savedSearch = twitter.searchOperations().createSavedSearch("DACA");
        return savedSearch.getQuery();
    }

}
