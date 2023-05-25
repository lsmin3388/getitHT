package com.getit.Question.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="Character")
public class Characters {

    // 공통 특징
    @Id
    @GeneratedValue
    @Column(name = "character_id")
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


    // 탁주 생성자
    public Characters( Long sweet, Long sour, Long bitter, Long body_taste, Long sparkle, Long alcohol) {
        this.sweet = sweet;
        this.sour = sour;
        this.bitter = bitter;
        this.body_taste = body_taste;
        this.sparkle = sparkle;
        this.alcohol = alcohol;
    }

    // 증류주 생성자

    public Characters( Long sweet, Long sour, Long bitter, Long body_taste, Long sparkle, Long alcohol, Long scent, String scent_version, String sweety, String nutty, String flowery) {
        this.sweet = sweet;
        this.sour = sour;
        this.bitter = bitter;
        this.body_taste = body_taste;
        this.sparkle = sparkle;
        this.alcohol = alcohol;
        this.scent = scent;
        this.scent_version = scent_version;
        this.sweety = sweety;
        this.nutty = nutty;
        this.Flowery = flowery;
    }
}
