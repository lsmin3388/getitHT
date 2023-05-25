package com.getit.Question.service;

import com.getit.Question.domain.Characters;
import com.getit.Question.repository.CharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CharacterService {
    private final CharacterRepository characterRepository;


    // Character는 주종에 따라 나눠서 설정해야 하는건가??


    // 탁주, 청주/약주, 과실주 create
    public Characters raw_save(Characters characters) {
        return characterRepository.save(
                new Characters(characters.getSweet(), characters.getSour(), characters.getBitter(), characters.getBody_taste(), characters.getSparkle(), characters.getAlcohol())
        );
    }


    // 증류주 create
    public Characters soju_save(Characters characters) {
        return characterRepository.save(
                new Characters(characters.getSweet(), characters.getSour(), characters.getBitter(), characters.getBody_taste(), characters.getSparkle(), characters.getAlcohol(), characters.getScent(), characters.getScent_version(), characters.getSweety(), characters.getFlowery(), characters.getNutty())
        );
    }

    // read
    public Characters findById(Long id) {
        return characterRepository.findById(id).get();
    }

    public List<Characters> findAll() {
        return characterRepository.findAll();
    }

    // 탁주, 청주/약주, 과실주 update
    public Characters raw_update(Characters characters, Long id) {
        Characters update_Characters = characterRepository.findById(id).get();
        update_Characters.setSweet(characters.getSweet());
        update_Characters.setSour(characters.getSour());
        update_Characters.setBitter(characters.getBitter());
        update_Characters.setBody_taste(characters.getBody_taste());
        update_Characters.setSparkle(characters.getSparkle());
        update_Characters.setAlcohol(characters.getAlcohol());
        return characterRepository.save(update_Characters);
    }

    // 증류주 update
    public Characters soju_update(Characters characters, Long id) {
        Characters soju_Characters = characterRepository.findById(id).get();
        soju_Characters.setSweet(characters.getSweet());
        soju_Characters.setSour(characters.getSour());
        soju_Characters.setBitter(characters.getBitter());
        soju_Characters.setBody_taste(characters.getBody_taste());
        soju_Characters.setSparkle(characters.getSparkle());
        soju_Characters.setAlcohol(characters.getAlcohol());
        soju_Characters.setScent(characters.getScent());
        soju_Characters.setScent_version(characters.getScent_version());
        soju_Characters.setSweety(soju_Characters.getSweety());
        soju_Characters.setNutty(soju_Characters.getNutty());
        soju_Characters.setFlowery(soju_Characters.getFlowery());
        return characterRepository.save(soju_Characters);
    }

    //delete
    public void delete(Long id) {
        characterRepository.deleteById(id);
    }


}
