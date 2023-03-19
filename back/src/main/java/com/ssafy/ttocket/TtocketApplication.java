package com.ssafy.ttocket;

import com.ssafy.ttocket.config.FixedRateScheduler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@EnableScheduling
@SpringBootApplication
public class TtocketApplication {
//	private static final FixedRateScheduler fixedRateScheduler = new FixedRateScheduler();
	public static void main(String[] args) {
		SpringApplication.run(TtocketApplication.class, args);
//		fixedRateScheduler.printingMessage();
	}


}
