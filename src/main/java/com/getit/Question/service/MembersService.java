package com.getit.Question.service;

import com.getit.Question.domain.Characters;
import com.getit.Question.domain.Members;
import com.getit.Question.repository.CharacterRepository;
import com.getit.Question.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
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
