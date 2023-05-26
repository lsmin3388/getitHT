package com.getit.Question;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;

public class CrawlingDetails {
    public ArrayList<String> crawlingDeatails(String address) {

        String url = "https://www.sooldamhwa.com/damhwaMarket/detail/" + address;
        try {
            Document document = Jsoup.connect(url).get();
            Elements ele1 = document.select("div[class='Wrapper-sc-1r8qu1p-0 SoolMainPointsStyle__SoolMainPointsWrapper-sc-hq7xx3-0 FBVSz erfZqy']");
            ArrayList<String> results = new ArrayList<>();
            for (Element element : ele1) {
                for (Element span : element.select("span")) {
                    if (!span.text().isBlank())
                        results.add(span.text());
                }
            }

            return results;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

}