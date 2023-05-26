package com.getit.Question.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "Members")
public class Members {

    public Members() {
    }

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;
    private Long age;
    private String sex;
    private String favorite;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "character_id")
    private Characters characters;


    // 주종 domain
    private Long raw;
    private Long clear;
    private Long soju;
    private Long fruit;
    private String Alcohol_Type;

    public Members(Long age, String sex, String favorite, Characters characters) {
        this.age = age;
        this.sex = sex;
        this.favorite = favorite;
        this.characters = characters;
    }

    public Members(Long raw, Long clear, Long soju, Long fruit, String Alcohol_Type) {
        this.raw = raw;
        this.clear = clear;
        this.soju = soju;
        this.fruit = fruit;
        this.Alcohol_Type = Alcohol_Type;
    }
}
