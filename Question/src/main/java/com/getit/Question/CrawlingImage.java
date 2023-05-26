package com.getit.Question;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class CrawlingImage {
    public String crawlingImage(String address) {

        String url = "https://www.sooldamhwa.com/damhwaMarket/detail/" + address;
        try {
            Document document = Jsoup.connect(url).get();
            Elements ele1 = document.select("div[class='slick-slide slick-active slick-current']");
            String imgURL = "";
            for (Element element : ele1) {
                for (Element img : element.select("img")) {
                    imgURL = img.attr("src");
                }
            }

            return imgURL;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

}