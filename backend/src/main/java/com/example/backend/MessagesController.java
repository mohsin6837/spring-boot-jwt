package com.example.backend;

import java.util.Arrays;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.GetExchange;

@RestController
@RequestMapping("/api/v1")
public class MessagesController {

    @GetExchange("/messages")
    public ResponseEntity<?> getMessages(){
        return ResponseEntity.ok(Arrays.asList("first","second"));
    }
}
