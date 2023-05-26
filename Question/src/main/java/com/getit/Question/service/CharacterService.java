package com.getit.Question.service;

import com.getit.Question.domain.Characters;
import com.getit.Question.domain.Members;
import com.getit.Question.repository.CharacterRepository;
import com.getit.Question.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CharacterService {
    private final CharacterRepository characterRepository;
    private final MemberRepository memberRepository;


    // Character는 주종에 따라 나눠서 설정해야 하는건가??


    // 탁주, 청주/약주, 과실주 create
    public Characters save(Characters characters, Long member_id) {

        Members members = memberRepository.findById(member_id).get();

        Characters create_characters = new Characters(
                characters.getSweet(),
                characters.getSour(),
                characters.getBitter(),
                characters.getBody_taste(),
                characters.getSparkle(),
                characters.getAlcohol()
        );

        members.setCharacters(create_characters);

        memberRepository.save(members);

        return characterRepository.save(create_characters);
    }


    // 증류주 create
    public Characters soju_save(Characters characters, Long member_id) {

        Members members = memberRepository.findById(member_id).get();

        Characters create_characters = new Characters(
                characters.getSweet(),
                characters.getLinger(),
                characters.getBody_taste(),
                characters.getAlcohol(),
                characters.getScent(),
                characters.getSweety(),
                characters.getNutty(),
                characters.getFlowery()
        );

        members.setCharacters(create_characters);

        memberRepository.save(members);

        return characterRepository.save(create_characters);
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
    public Long[] clear_findById(Long id) {
        Members members = memberRepository.findById(id).get();
        Characters characters = members.getCharacters();

        Long[] arr={
                characters.getSweet(),
                characters.getSour(),
                characters.getBitter(), characters.getBody_taste(), 0L, characters.getAlcohol()
        };
        return arr;
    }
    public Long[] raw_findById(Long id) {
        Members members = memberRepository.findById(id).get();
        Characters characters = members.getCharacters();

        Long[] arr={
                characters.getSweet(),
                characters.getSour(),
                characters.getBitter(), characters.getBody_taste(), characters.getSparkle(), characters.getAlcohol()
        };
        return arr;
    }
    public Long[] soju_findById(Long id) {
        Members members = memberRepository.findById(id).get();
        Characters characters = members.getCharacters();

        Long[] arr={
                characters.getSweety(),
                characters.getNutty(),
                characters.getFlowery(),
                characters.getScent(),
                characters.getSweet(),
                characters.getLinger(),
                characters.getBody_taste(),
                characters.getAlcohol()
        };
        return arr;
    }
    public Long[] fruit_findById(Long id) {
        Members members = memberRepository.findById(id).get();
        Characters characters = members.getCharacters();

        Long[] arr={
                characters.getSweet(),
                characters.getSour(),
                characters.getBitter(), characters.getBody_taste(), characters.getSparkle(), characters.getAlcohol()
        };
        return arr;
    }

    public List<Characters> findAll() {
        return characterRepository.findAll();
    }

}
