package com.getit.Question.controller;

import com.getit.Question.domain.Characters;
import com.getit.Question.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/api")
@RequiredArgsConstructor
public class CharacterController {
    private final CharacterService characterService;

    // create
    @PostMapping("/characters/create/{id}")
    public ResponseEntity<Characters> create(@RequestBody Characters characters, @PathVariable("id") Long member_id) {


        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(characterService.save(characters, member_id));
    }

    @PostMapping("/characters/soju_save/{id}")
    public ResponseEntity<Characters> soju_save(@RequestBody Characters characters, @PathVariable("id") Long member_id) {


        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(characterService.soju_save(characters, member_id));
    }

    // read
    @GetMapping("/characters/{id}")
    public ResponseEntity<Characters> read(@PathVariable("id") Long member_id) {
        return ResponseEntity
                .ok(characterService.findById(member_id));
    }



}
