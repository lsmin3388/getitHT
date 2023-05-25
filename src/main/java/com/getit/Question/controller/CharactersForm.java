package com.getit.Question.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CharactersForm {
    private Long id;

    private Long sweet;
    private Long sour;
    private Long bitter;
    private Long body_taste;
    private Long sparkle;
    private Long alcohol;

    // 증류주 특징
    private Long scent;
    private String scent_version;
    private String sweety;
    private String nutty;
    private String Flowery;

}
