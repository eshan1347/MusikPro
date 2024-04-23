package dev.eshanM.Musik;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class MusikApplication {
	public static void main(String[] args) {
		SpringApplication.run(MusikApplication.class, args);
	}
	@GetMapping("/root")
	public String apiRoot(){
		return "Hello World!";
	}

}


