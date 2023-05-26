package com.getit.Question;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

public class HttpRequestAPI {
    public String getResult(){
        String url = "https://alcoapi.fly.dev/recommend";

        MultiValueMap<String, Object> parameters = new LinkedMultiValueMap<>();

        String alcoType = "clear";
        Long[] userData = {80L, 60L, 20L, 44L, 0L, 10L};

        parameters.add("alcoType", alcoType);
        parameters.add("userData", userData);

        // 요청 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // HTTP 엔티티 생성
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(parameters, headers);

        // REST 템플릿을 사용하여 POST 요청 전송
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);

        // 응답 결과 출력
        String result = response.getBody();
        if (result != null) {
            result = result.replaceAll("(\r\n|\r|\n|\n\r)", " ");
            result = result.replace("{   \"result\": ", "").replace(" }", "");
        }

        return result;

    }
}