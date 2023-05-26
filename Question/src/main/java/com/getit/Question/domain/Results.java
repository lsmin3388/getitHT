package com.getit.Question.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "results")
@NoArgsConstructor
public class Results {

    @Id
    @GeneratedValue
    @Column(name = "result_id")
    private Long id;

    // 증류주: 향 단맛 여운 바디 도수

    // 나머지: 단맛 산미 씁슬 바디 도수

    // all 공통

    private String sweet;

    private String body;

    private String alcohol;

    // 증류주
    private String scent;
    private String linger;

    // 나머지
    private String sour;
    private String bitter;

}
