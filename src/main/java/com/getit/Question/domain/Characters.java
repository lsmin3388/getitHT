package com.getit.Question.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="Characters")
@NoArgsConstructor
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
    private Long linger;
    private Long sweety;
    private Long nutty;
    private Long Flowery;


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

    public Characters( Long sweet, Long linger, Long body_taste, Long alcohol, Long scent, Long sweety, Long nutty, Long flowery) {
        this.sweet = sweet;
        this.linger = linger;
        this.body_taste = body_taste;
        this.alcohol = alcohol;
        this.scent = scent;
        this.sweety = sweety;
        this.nutty = nutty;
        this.Flowery = flowery;
    }
}
