package com.getit.Question.controller;

import com.getit.Question.domain.Characters;
import com.getit.Question.domain.Results;
import com.getit.Question.service.ResultsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/api")
@RequiredArgsConstructor
public class ResultController {
    private final ResultsService resultsService;

    @PostMapping("/results/create/{id}")
    public ResponseEntity<Results> create(@RequestBody Results results, @PathVariable("id") Long member_id) {


        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(resultsService.save(results, member_id));
    }

    @PostMapping("/results/soju_create/{id}")
    public ResponseEntity<Results> soju_create(@RequestBody Results results, @PathVariable("id") Long member_id) {


        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(resultsService.save(results, member_id));
    }



}
