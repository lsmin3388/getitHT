package com.getit.Question.service;

import com.getit.Question.domain.Members;
import com.getit.Question.repository.CharacterRepository;
import com.getit.Question.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class MembersService {
    private final MemberRepository memberRepository;
    private final CharacterRepository characterRepository;

     // Create
    public Members save(Members members) {

        return memberRepository.save(
                new Members(
                        members.getAge(),
                        members.getSex(),
                        members.getFavorite(),
                        members.getCharacters()
                )
        );
    }


    // alcohol type save 로직
    public Members alcoholtype_save(Members members, Long memberid) {

        Members typemember = memberRepository.findById(memberid).get();

        typemember.setRaw(members.getRaw());
        typemember.setClear(members.getClear());
        typemember.setSoju(members.getSoju());
        typemember.setFruit(members.getFruit());

        Long now_raw = members.getRaw();
        Long now_clear = members.getClear();
        Long now_soju = members.getSoju();;
        Long now_fruit = members.getFruit();

        Long i[] = {now_raw, now_clear, now_soju, now_fruit};
        Arrays.sort(i, Collections.reverseOrder());

        // 만일 값 동일하면?
        if (i[0] == now_raw) {
            typemember.setAlcohol_Type("Raw");
        } else if (i[0] == now_clear) {
            typemember.setAlcohol_Type("Clear");
        } else if (i[0] == now_soju) {
            typemember.setAlcohol_Type("Soju");
        } else if (i[0] == now_fruit) {
            typemember.setAlcohol_Type("Fruit");
        }

        return memberRepository.save(typemember);
    }


    // Read
    public Members findById(Long id) {
        return memberRepository.findById(id).get();
    }

    public List<Members> findAll() {
        return memberRepository.findAll();
    }


    //update
    public Members update(Members members, Long id) {
        Members update_members = memberRepository.findById(id).get();
        update_members.setAge(members.getAge());
        update_members.setSex(members.getSex());
        update_members.setFavorite(members.getFavorite());
        update_members.setCharacters(members.getCharacters());
        return memberRepository.save(update_members);
    }




    //delete
    public void delete(Long id) {
        memberRepository.deleteById(id);
    }


}
