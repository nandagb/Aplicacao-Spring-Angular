package br.com.imd.api1web2.api1.papeis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= "br.com.imd")
public class PapeisApplication {

    public static void main(String[] args) {
        SpringApplication.run(PapeisApplication.class, args);
    }

}