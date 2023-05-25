package com.getit.Question.controller;

import com.getit.Question.domain.Members;
import com.getit.Question.service.MembersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/api")
@RequiredArgsConstructor
public class MembersController {
    private final MembersService membersService;

    @PostMapping("/members/create")
    public ResponseEntity<Members> create(@RequestBody Members members) {


        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(membersService.save(members));
    }

    @GetMapping("/members/{id}")
    public ResponseEntity<Members> read(@PathVariable("id") Long id) {
        return ResponseEntity
                .ok(membersService.findById(id));
    }

    @PutMapping("/members/{id}")
    public ResponseEntity<Members> read(@PathVariable("id") Long id, @RequestBody Members members) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(membersService.update(members, id));
    }

    @DeleteMapping("/members/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") Long id) {
        membersService.delete(id);
        ResponseEntity.noContent();
        return null;
    }



}
