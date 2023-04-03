package com.ssafy.tttocket.controller;

import com.ssafy.tttocket.dto.WaitQueEnterDto;
import com.ssafy.tttocket.service.TicketingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

@Controller
@RequiredArgsConstructor
@Slf4j
public class TicketingController {
    private final SimpMessagingTemplate template; //특정 Broker로 메세지를 전달
    private final SimpMessageSendingOperations sendingOperations;
    private final TicketingService ticketingService;
    private final RedisTemplate redisTemplate;

    @MessageMapping(value = "/chat/enter")
    public void enter(@RequestBody WaitQueEnterDto waitQueEnterDto){
        log.info("userId : "+waitQueEnterDto.getUserId() +",  performId : "+ waitQueEnterDto.getPerformId());
        // 해당 유저를 해당 공연 대기큐에 추가
        Map<String, Object> returnData = ticketingService.addToWaitQue(waitQueEnterDto.getUserId(), waitQueEnterDto.getPerformId());
        sendingOperations.convertAndSend("/sub/chat/perform/"+waitQueEnterDto.getPerformId() ,returnData);
    }

    @Scheduled(fixedRate = 30000)
    public void QuePoll(){
        log.info("앙 실행");
        Set<String> redisKeys = redisTemplate.keys("WaitQue");
        Iterator<String> it = redisKeys.iterator();
        while (it.hasNext()) {

            String data = it.next();
            log.info("data : {data}");

            Integer performId = Integer.parseInt(data.split("::")[1]);
            String debateChatDtos = redisTemplate.opsForList().range(data,0,-1).toString();
            log.info(debateChatDtos);
            //이제 여기서 10개 빼면 댐
        }
    }
}
