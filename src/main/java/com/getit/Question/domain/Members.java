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

    public Members(Long age, String sex, String favorite, Characters characters) {
        this.age = age;
        this.sex = sex;
        this.favorite = favorite;
        this.characters = characters;
    }
}
