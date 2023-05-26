package com.getit.Question.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "Members")
@NoArgsConstructor
public class Members {

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;
    private Long age;
    private String sex;
    private String favorite;
    private String region;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "character_id")
    private Characters characters;

    public void setCharacters(Characters characters) {
        this.characters = characters;
    }

    // 주종 domain
    private Long raw;
    private Long clear;
    private Long soju;
    private Long fruit;
    private String Alcohol_Type;

    public Members(Long age, String sex, String favorite, String region, Characters characters) {
        this.age = age;
        this.sex = sex;
        this.favorite = favorite;
        this.region = region;
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
