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

    /*
clear
# 단맛 산미 씁슬 바디 탄산(=0) 도수
fruit
# 단맛 산미 씁슬 바디 탄산 도수
raw
# 단맛 산미 씁슬 바디 탄산 도수
soju
# 달콤 고소 화사 향의강도 단맛 여운 바디 도수
 */
    // read
    @GetMapping("/characters/clear/{id}")
    public ResponseEntity<Long[]> clear_read(@PathVariable("id") Long member_id) {
        return ResponseEntity
                .ok(characterService.clear_findById(member_id));
    }

    @GetMapping("/characters/fruit/{id}")
    public ResponseEntity<Long[]> fruit_read(@PathVariable("id") Long member_id) {
        return ResponseEntity
                .ok(characterService.fruit_findById(member_id));
    }

    @GetMapping("/characters/raw/{id}")
    public ResponseEntity<Long[]> raw_read(@PathVariable("id") Long member_id) {
        return ResponseEntity
                .ok(characterService.raw_findById(member_id));
    }

    @GetMapping("/characters/soju/{id}")
    public ResponseEntity<Long[]> soju_read(@PathVariable("id") Long member_id) {
        return ResponseEntity
                .ok(characterService.soju_findById(member_id));
    }



}
