package com.SaiAmirthesh.URLShortner.service;

import com.SaiAmirthesh.URLShortner.Repository.UrlRepository;
import com.SaiAmirthesh.URLShortner.model.UrlMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class UrlService {

    @Autowired
    private UrlRepository urlRepository;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int SHORT_CODE_LENGTH = 6;

    @Transactional
    public UrlMapping createShortUrl(String originalUrl){
        String shortcode = generateUniqueShortCode();
        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setShortCode(shortcode);
        urlMapping.setUrl(originalUrl);
        return urlRepository.save(urlMapping);
    }

    private String generateUniqueShortCode(){
        Random random = new Random();
        String shortCode;
        int attempt = 0;

        do{
            StringBuilder sb = new StringBuilder();
            for(int i=0;i<SHORT_CODE_LENGTH;i++){
                sb.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
            }
            shortCode = sb.toString();
            attempt++;
            if(attempt>10){
                throw new RuntimeException("Failed to Generate a unique short code within 10 attempts");
            }
        }while(urlRepository.existsByShortCode(shortCode));
        return shortCode;
    }

    @Transactional
    public Optional<UrlMapping> getOriginalUrl(String shortCode){
        Optional<UrlMapping> urlMapping = urlRepository.findByShortCode(shortCode);
        if(urlMapping.isPresent()){
            UrlMapping mapping = urlMapping.get();
            int currentCount = (mapping.getAccessCount() != null) ? mapping.getAccessCount() : 0;
            mapping.setAccessCount(currentCount + 1);
            return Optional.of(urlRepository.save(mapping));
        }
        return Optional.empty();
    }

    public Optional<UrlMapping> getUrlStats(String shortCode){
        return urlRepository.findByShortCode(shortCode);
    }

    @Transactional
    public Optional<UrlMapping> updateShortUrl(String shortCode ,String newUrl){
        Optional<UrlMapping> existingUrl = urlRepository.findByShortCode(shortCode);
        if(existingUrl.isPresent()){
            UrlMapping mapping = existingUrl.get();
            mapping.setUrl(newUrl);
            mapping.setUpdatedAt(LocalDateTime.now());
            return Optional.of(urlRepository.save(mapping));
        }
        return Optional.empty();
    }


    @Transactional
    public boolean deleteUrl(String shortCode){
        if(urlRepository.existsByShortCode(shortCode)){
            urlRepository.deleteByShortCode(shortCode);
            return true;
        }
        return false;
    }

    public List<UrlMapping> getAllUrls() {
        return urlRepository.findAll();
    }
}
