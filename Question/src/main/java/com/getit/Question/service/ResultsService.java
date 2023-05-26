package com.getit.Question.service;

import com.getit.Question.domain.Members;
import com.getit.Question.domain.Results;
import com.getit.Question.repository.MemberRepository;
import com.getit.Question.repository.ResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ResultsService {
    private final ResultRepository resultRepository;
    private final MemberRepository memberRepository;

    public Results save(Results results, Long member_id) {
        Members members = memberRepository.findById(member_id).get();

        Results new_results = new Results();

        new_results.setSweet(results.getSweet());
        new_results.setBody(results.getBody());
        new_results.setAlcohol(results.getAlcohol());
        new_results.setSour(results.getSour());
        new_results.setBitter(results.getBitter());

        members.setResults(new_results);
        memberRepository.save(members);

        return resultRepository.save(new_results);
    }

    public Results soju_save(Results results, Long member_id) {
        Members members = memberRepository.findById(member_id).get();

        Results new_results = new Results();

        new_results.setSweet(results.getSweet());
        new_results.setBody(results.getBody());
        new_results.setAlcohol(results.getAlcohol());
        new_results.setScent(results.getScent());
        new_results.setLinger(results.getLinger());

        members.setResults(new_results);
        memberRepository.save(members);

        return resultRepository.save(new_results);
    }
}
