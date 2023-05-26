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

    // read
    public Characters findById(Long id) {
        return characterRepository.findById(id).get();
    }

    public List<Characters> findAll() {
        return characterRepository.findAll();
    }

}
