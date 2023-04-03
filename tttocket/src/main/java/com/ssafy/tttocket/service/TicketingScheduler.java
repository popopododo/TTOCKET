package com.ssafy.tttocket.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class TicketingScheduler {

    @Scheduled(fixedRate = 30000)
    public void QuePoll(){

    }
}
