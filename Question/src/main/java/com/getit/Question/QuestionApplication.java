package com.getit.Question;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class QuestionApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuestionApplication.class, args);

		HttpRequestAPI httpRequestAPI = new HttpRequestAPI();
		CrawlingDetails crawlingDetails = new CrawlingDetails();
		CrawlingImage crawlingImage = new CrawlingImage();

		String result = httpRequestAPI.getResult();
		System.out.println(result);
		ArrayList<String> data = crawlingDetails.crawlingDeatails(result);
		System.out.println(data);
		String imgURL = crawlingImage.crawlingImage(result);
		System.out.println(imgURL);
	}

}
